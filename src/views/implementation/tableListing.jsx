import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button'
import Delete from '@mui/icons-material/Delete';
import Edit from '@mui/icons-material/Edit';
import AddEditDialog from './addEditDialog'
import { useTranslation } from "react-i18next";

export default function BasicTable(props) {
  const { onDelete } = props
  const [open, setOpen] = React.useState(false)
  const [type, setType] = React.useState('')
  const [item, setContent] = React.useState({})

  const { t } = useTranslation();

  const updateValues = (t, v) => {
    setOpen(true)
    setType(t)
    setContent(v)
  }

  return (
    <div>
      <TableContainer component={Paper}>
        <div>
          <Button className='float-right' onClick={() => updateValues('ADD', null)}>
            {t('create')}
          </Button>
        </div>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>{t('accessories')}</TableCell>
              <TableCell align="right">{t('price')}</TableCell>
              <TableCell align="right">{t('delete')}</TableCell>
              <TableCell align='right'>{t('edit')}</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {props.list.map((row) => (
              <TableRow
                key={row.name}
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  {row.name}
                </TableCell>
                <TableCell align="right">{row.price}</TableCell>
                <TableCell align="right">
                  <Button onClick={() => onDelete(row)}>
                    <Delete />
                  </Button>
                </TableCell>
                <TableCell align='right'>
                  <Button onClick={() => updateValues('EDIT', row)}>
                    <Edit />
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <div>
        {
          open && (
            <AddEditDialog open={open} type={type} item={item} closeDialog={() => setOpen(false)} />
          )
        }
      </div>
    </div>
  );
}


BasicTable.defaultProps = {
  list: []
}
