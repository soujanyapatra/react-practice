import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';
import Skeleton from '@mui/material/Skeleton';
import Change from '@mui/icons-material/ChangeCircleOutlined'
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';

const User = (props) => {
  const { data, showNewUser } = props
  return (
    <div style={{ minWidth: '100%' }}>
      <Box
        sx={{
          p: 2,
          display: 'grid',
          gap: 2,
        }}
      >
        <Paper elevation={3}>
          <div className='p-10'>
            <Tooltip title="Change" placement="top" arrow>
              <Button variant="text" className='float-right' onClick={() => showNewUser({})}>
                <Change />
              </Button>
            </Tooltip>
            <Stack direction="row" spacing={1} className='d-flex justify-center'>
              {
                data?.picture?.thumbnail ? (
                  <Avatar alt="Remy Sharp" sx={{ width: 56, height: 56 }} src={data?.picture?.thumbnail} />
                ) : (
                  <Skeleton variant="circular" width={60} height={60} />
                )
              }
            </Stack>
            <Stack direction="row" spacing={1} className='d-flex justify-center mt-5'>
              {
                data?.name?.title ? (
                  <div>
                    Name: {`${data?.name?.title} ${data?.name?.first} ${data?.name?.last}`}
                  </div>
                ) : (
                  <Skeleton variant="rectangular" width={300} height={20} />
                )
              }
            </Stack>
            <Stack direction="row" spacing={1} className='d-flex justify-center mt-2'>
              {
                data?.email ? (
                  <div>
                    Email: {data?.email}
                  </div>
                ) : (
                  <Skeleton variant="rectangular" width={300} height={20} />
                )
              }
            </Stack>
            <Stack direction="row" spacing={1} className='d-flex justify-center mt-2'>
              {
                data?.location?.street?.name ? (
                  <div>
                    Address: {data?.location?.street?.name} {data?.location?.city} {data?.location?.state} {data?.location?.country} {data?.location?.postcode}
                  </div>
                ) : (
                  <Skeleton variant="rectangular" width={400} height={20} />
                )
              }
            </Stack>
            <Stack direction="row" spacing={1} className='d-flex justify-center mt-1'>
              {
                data?.phone ? (
                  <div>
                    Contact: {data?.phone} | {data?.cell}
                  </div>
                ) : (
                  <Skeleton variant="rectangular" width={200} height={20} />
                )
              }
            </Stack>
          </div>
        </Paper>
      </Box>
    </div>
  )
}

export default User
