import { Grid, Paper } from '@mui/material'
import { Box } from '@mui/system'
import CategoriePaper from 'components/elements/CategoriePaper'
import { CategorieContext } from 'context/CategorieContext'
import React, { useContext } from 'react'

const BoxCategories = () => {
  let [categories] = useContext(CategorieContext);  
  return (
    <>

      <Box
        sx={{
          className: 'xs:h-48',
          width: 2 / 2,
          display: 'flex',
          flexWrap: 'wrap',
          justifyContent: 'center',
          '& > :not(style)': {
            m: 1,
            mt: 4,
            mb: 4,
            maxWidth: 300,
            width: 2 / 2,
            height: '50'
          }
        }}
      >
        <Paper elevation={3}
          className="xs:h-24"
          sx={{
            textAlign: 'center',
            color: '#0F3759',
            lineHeight: '50px',
            overflow: 'hidden',
            textOverflow: 'clip',
            fontSize: 20,
            fontWeight: 600,
            maxHeight: 100
          }}> ELEGÍ UNA CATEGORÍA</Paper>
      </Box>
      <Grid>
        <Box
          sx={{
            width: 2 / 2,
            display: 'flex',
            flexWrap: 'wrap',
            gap: 2,
            gridTemplateColumns: { md: '1fr 1fr' },
            justifyContent: 'center',
            '& > :not(style)': {
              m: 2,
              mb: 4,
              maxWidth: 250,
              width: 2 / 2,
              height: 150
            }
          }}
        >
          {
            categories.map((categorie) => (
              <CategoriePaper
                key={categorie.id}
                navigate={'/inscribirse/' + categorie.name}
                backgroundColor='rgb(245 245 245)'
                color={categorie.color}
                name={categorie.name} ></CategoriePaper>
            ))
          }
        </Box>
      </Grid>
    </>
  )
}

export default BoxCategories