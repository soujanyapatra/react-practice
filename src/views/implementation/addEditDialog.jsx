import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';
import { useDispatch } from 'react-redux';
import { addItem, updateItem } from '../store/test'
import cryptoRandomString from 'crypto-random-string';
import { useFormik } from 'formik';
import * as Yup from 'yup';

export default function AddEditDialog(props) {
  const { closeDialog } = props

  // const [name, setName] = React.useState(props?.item?.name || '')
  // const [value, setValue] = React.useState(props?.item?.price || '')

  const dispatch = useDispatch()

  const validationSchema = Yup.object({
    name: Yup.string().required('Enter a valid name'),
    price: Yup.number().required('Enter a valid price').positive().integer(),
  });

  const formik = useFormik({
    initialValues: {
      name: props?.item?.name || '',
      price: props?.item?.price?.replace('$', '') || '',
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      console.log('Form submitted:', values);
    },
  });

  const addEditItemValue = () => {
    if (formik?.isValid) {
      if (props?.type === 'ADD') {
        const item = {
          name: formik.values.name,
          price: `$${formik.values.price}`,
          id: cryptoRandomString({ length: 6, type: 'url-safe' }),
        }
        dispatch(addItem(item))
      } else {
        const editObj = {
          name: formik.values.name,
          price: `$${formik.values.price}`,
          id: props?.item?.id,
        }
        dispatch(updateItem(editObj))
      }
      closeDialog(false)
    }
  }

  // const handleNameChange = (event) => {
  //   setName(event.target.value);
  // }

  // const handleValueChange = (event) => {
  //   setValue(event.target.value);
  // }

  return (
    <React.Fragment>
      <Dialog
        open={props?.open}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
        onClose={() => closeDialog(false)}
      >
        <DialogTitle id="alert-dialog-title">
          {props?.type && props?.type === 'Edit' ? (
            <div>
              Edit an item
            </div>
          ) : (
            <div>
              Add an item
            </div>
          )}
        </DialogTitle>
        <DialogContent>
          <form onSubmit={formik.handleSubmit}>
            <Stack sx={{
              width: '30rem',
            }}>
              <TextField
                value={formik.values.name}
                variant="standard"
                fullWidth
                {...formik.getFieldProps('name')}
                onChange={formik.handleChange}
                error={formik.touched.name && Boolean(formik.errors.name)}
                helperText={formik.touched.name && formik.errors.name}
              />
              <TextField
                value={formik.values.value}
                variant="standard"
                fullWidth
                {...formik.getFieldProps('price')}
                error={formik.touched.price && Boolean(formik.errors.price)}
                helperText={formik.touched.price && formik.errors.price}
              />
            </Stack>
          </form>
        </DialogContent>
        <DialogActions>
          <Button onClick={() => closeDialog(false)}>Cancel</Button>
          <Button onClick={addEditItemValue} autoFocus>Save</Button>
        </DialogActions>
      </Dialog>
    </React.Fragment>
  );
}
