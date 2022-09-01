import { faker } from '@faker-js/faker';

import { Grid, Container, Typography } from '@mui/material';
// components
import Page from '../components/Page';
// sections
import {
  AppNewsUpdate,
  AppWebsiteVisits,
  AppWidgetSummary,
} from '../sections/@dashboard/app';

// ----------------------------------------------------------------------

export default function DashboardApp() {

  return (
    <Page title="Dashboard">
      <Container maxWidth="xl">
        <Typography variant="h4" sx={{ mb: 5 }}>
          Informações gerais
        </Typography>

        <Grid container spacing={3}>
          <Grid item xs={12} sm={6} md={12}>
            <AppWidgetSummary title="Total de itens perdidos" total={20} icon={'fluent:box-multiple-24-filled'} />
          </Grid>

          <Grid item xs={12} sm={6} md={3}>
            <AppWidgetSummary title="Itens secção 1" total={5} color="info" icon={'fluent:box-16-filled'} />
          </Grid>

          <Grid item xs={12} sm={6} md={3}>
            <AppWidgetSummary title="Itens secção 2" total={5} color="warning" icon={'fluent:box-16-filled'} />
          </Grid>

          <Grid item xs={12} sm={6} md={3}>
            <AppWidgetSummary title="Itens secção 3" total={5} color="warning" icon={'fluent:box-16-filled'} />
          </Grid>

          <Grid item xs={12} sm={6} md={3}>
            <AppWidgetSummary title="Itens secção 4" total={5} color="error" icon={'fluent:box-16-filled'} />
          </Grid>

          <Grid item xs={12} md={12} lg={6}>
            <AppWebsiteVisits
              title="Saida de itens do achados e perdidos"
              subheader="(+43%) than last year"
              chartLabels={[
                '01/01/2003',
                '02/01/2003',
                '03/01/2003',
                '04/01/2003',
                '05/01/2003',
                '06/01/2003',
                '07/01/2003',
                '08/01/2003',
                '09/01/2003',
                '10/01/2003',
                '11/01/2003',
              ]}
              chartData={[
                {
                  name: 'Seccão 1',
                  type: 'column',
                  fill: 'solid',
                  data: [23, 11, 22, 27, 13, 22, 37, 21, 44, 22, 30],
                },
                {
                  name: 'Seccão 2',
                  type: 'area',
                  fill: 'gradient',
                  data: [44, 55, 41, 67, 22, 43, 21, 41, 56, 27, 43],
                },
                {
                  name: 'Seccão 3',
                  type: 'line',
                  fill: 'solid',
                  data: [30, 25, 36, 30, 45, 35, 64, 52, 59, 36, 39],
                },
              ]}
            />
          </Grid>

          <Grid item xs={12} md={6} lg={6}>
            <AppNewsUpdate
              title="Novos itens"
              list={[...Array(5)].map((_, index) => ({
                id: faker.datatype.uuid(),
                title: faker.name.jobTitle(),
                description: "Item encontrado na secção 2",
                image: `/static/mock-images/covers/cover_${index + 1}.jpg`,
                postedAt: faker.date.recent(),
              }))}
            />
          </Grid>
        </Grid>
      </Container>
    </Page>
  );
}
