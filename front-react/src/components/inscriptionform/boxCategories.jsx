import { Grid, Paper } from '@mui/material'
import { Box } from '@mui/system'
import CategoriePaper from 'components/elements/CategoriePaper'
import { CategorieContext } from 'context/CategorieContext'
import React, { useContext } from 'react'
import { routes } from "routes/routes";

const BoxCategories = () => {
  let [categories] = useContext(CategorieContext);  
  return (
    <div className=' '>
      <Box
        className ='xs:h-48'
        sx={{          
          
          width: 2 / 2,
          display: 'flex',
          flexWrap: 'wrap',
          justifyContent: 'center',
          '& > :not(style)': {            
            maxWidth: 300,
            width: 2 / 2,
            margin: 1,
          }
        }}        
      >
        <Paper elevation={3}
          className="xs:h-24 text-blue-cyan"
          sx={{
            textAlign: 'center',
            lineHeight: '50px',
            overflow: 'hidden',
            textOverflow: 'clip',
            fontSize: 20,
            fontWeight: 600,
            maxHeight: 100,
          }}> 
          ELEGÍ UNA CATEGORÍA
        </Paper>

      </Box>

      <Grid className="" sx={{
        padding: 1,
      }}>
        <Box
          className="flex overflow-hidden"
          sx={{
            width: 2 / 2,
            display: 'flex',
            flexWrap: 'wrap',
            gap: 2,
            gridTemplateColumns: { md: '1fr 1fr' },
            justifyContent: 'center',
            '& > :not(style)': {
              maxWidth: 210,
              width: 2 / 2,
              maxHeight: 150
            }
          }}
        >
          {
            categories.map((categorie) => (
              <CategoriePaper
                key={categorie.id}
                navigate={`${routes.preinscribirse}/${categorie.name}`}
                backgroundColor='rgb(245 245 245)'
                color={categorie.color}
                name={categorie.name} >                
              </CategoriePaper>
            ))
          }
        </Box>
      </Grid>
    </div>
  )
}

export default BoxCategories