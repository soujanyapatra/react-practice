import React, { useEffect, useState } from 'react'
import http from '../../plugins/axios'
import User from './user'
import Snackbar from '@mui/material/Snackbar';
import Weather from './weather';
import Stack from '@mui/material/Stack';

const Random = () => {
  const [randomUser, setUserData] = useState({})
  const [open, setOpen] = useState(false)

  const getUserData = async () => {
    try {
      let { data } = await http.get('randomuser.me/api')
      if (data) {
        setUserData(data?.results[0])
      }
    } catch (e) {
      console.log(e)
    }
  }

  const handleNewUser = async (v) => {
    setUserData(v)
    try {
      await getUserData()
      setOpen(true)
    } catch (e) {
      console.log(e)
    }
  }

  useEffect(() => {
    getUserData()

    return () => {
      setOpen(false)
      setUserData({})
    };
  }, []);

  return (
    <div className="mt-10">
      <Stack direction="row" sx={{
          p: 2,
          display: 'grid',
          gridTemplateColumns: { md: '1fr 1fr' },
          gap: 2,
        }}>
        <Stack direction="col">
          <User data={randomUser} showNewUser={handleNewUser} />
        </Stack>
        <Stack direction="col">
          <Weather />
        </Stack>
      </Stack>
      <Snackbar
        open={open}
        anchorOrigin={{ horizontal: 'center', vertical: 'top' }}
        autoHideDuration={1000}
        message="Profile changed successfully"
        key={'top center'}
        onClose={() => setOpen(false)}
      />
    </div>
  )
}

export default Random
