import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Stack from '@mui/material/Stack';
import Skeleton from '@mui/material/Skeleton';

const ItemCard = (props) => {
  const { item } = props
  return (
    <div style={{ minWidth: '50%' }}>
      <Box
        sx={{
          p: 2,
          display: 'grid',
          gap: 2,
        }}
      >
        <Paper elevation={3}>
          <div className='p-10'>
            <Stack direction="row" spacing={1} className='d-flex justify-center'>
              {
                item ? (
                  <div>{ item.id }</div>
                ) : (
                  <Skeleton variant="rectangle" width={1000} height={30} />
                )
              }
            </Stack>
            <Stack direction="row" spacing={1} className='d-flex justify-center'>
              {
                item?.title ? (
                  <div>{ item.title }</div>
                ) : (
                  <Skeleton variant="rectangle" width={1000} height={30} />
                )
              }
            </Stack>
            <Stack direction="row" spacing={1} className='d-flex justify-center'>
              {
                item?.thumbnail ? (
                  <img src={item.thumbnail?.lqip} alt='' height={150} width={150} />
                ) : (
                  <Skeleton variant="rectangle" width={1000} height={30} />
                )
              }
            </Stack>
          </div>
        </Paper>
      </Box>
    </div>
  )
}

export default ItemCard
