import { useState } from 'react';
import { Link as RouterLink } from 'react-router-dom';
// material
import { Container, Stack, Typography, Button, Modal, Box, TextField, MenuItem } from '@mui/material';
import Iconify from '../components/Iconify';
// components
import Page from '../components/Page';
import { ProductList, ProductFilterSidebar } from '../sections/@dashboard/products';
// mock
import PRODUCTS from '../_mock/products';

// ----------------------------------------------------------------------

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-30%, -50%)',
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
  justifyContent: "center"
};

const currencies = [
  {
    value: 'Sem secção',
    label: 'Sem secção',
  },
  {
    value: 'Secção 1',
    label: 'Secção 1',
  },
  {
    value: 'Secção 2',
    label: 'Secção 2',
  },
  {
    value: 'Secção 3',
    label: 'Secção 3',
  },
  {
    value: 'Secção 4',
    label: 'Secção 4',
  },
  {
    value: 'Secção 5',
    label: 'Secção 5',
  },
];


export default function EcommerceShop() {
  const [openFilter, setOpenFilter] = useState(false);

  const handleOpenFilter = () => {
    setOpenFilter(true);
  };

  const handleCloseFilter = () => {
    setOpenFilter(false);
  };

  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const [currency, setCurrency] = useState('Sem secção');

  const handleChange = (event) => {
    setCurrency(event.target.value);
  };

  return (
    <Page title="Dashboard: Itens perdidos">
      <Container>
        <Stack direction="row" alignItems="center" justifyContent="space-between" mb={5}>

          <Typography variant="h4" sx={{ mb: 5 }}>
            Itens perdidos
          </Typography>

          <Button variant="contained" component={RouterLink} onClick={handleOpen} to="#" startIcon={<Iconify icon="eva:plus-fill" />}>
            Novo item
          </Button>
        </Stack>

        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="parent-modal-title"
          aria-describedby="parent-modal-description"
        >
          <Box component="form" sx={{ ...style, '& .MuiTextField-root': { m: 1, width: '25ch' } }}>
          <Typography variant="h4" sx={{ mb: 5 }}>
            Formulário item perdido
          </Typography>
            <div >
              <TextField
                required
                id="outlined-required"
                label="Nome do item"
                defaultValue="Lapis"
              />
              <TextField
                id="outlined-multiline-static"
                label="Descrição"
                multiline
                rows={4}
                defaultValue="Default Value"
              />
            </div>
            
            <div>
              <TextField
                required
                id="outlined-required"
                label="Quem encontrou?"
                defaultValue="Lapis"
              />
              <TextField
                type="time"
                id="outlined-requireda"
                label="Horário do item encontrado"
                defaultValue=""
              />
            </div>
            
            <div>
              <TextField
                type="file"
                id="outlined-requireda"
                defaultValue=""
              />

              <TextField
                id="outlined-select-currency"
                select
                label="Secção a qual o item foi encontrado"
                value={currency}
                onChange={handleChange}
                helperText="Porfavor selecione uma opção"
              >
                {currencies.map((option) => (
                  <MenuItem key={option.value} value={option.value}>
                    {option.label}
                  </MenuItem>
                ))}
              </TextField>
            </div>
          </Box>
        </Modal>

        <Stack direction="row" flexWrap="wrap-reverse" alignItems="center" justifyContent="flex-end" sx={{ mb: 5 }}>
          <Stack direction="row" spacing={1} flexShrink={0} sx={{ my: 1 }}>
            <ProductFilterSidebar
              isOpenFilter={openFilter}
              onOpenFilter={handleOpenFilter}
              onCloseFilter={handleCloseFilter}
            />
          </Stack>
        </Stack>

        <ProductList products={PRODUCTS} />
      </Container>
    </Page>
  );
}
