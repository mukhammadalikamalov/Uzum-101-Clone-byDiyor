import React from "react";
import { Card, CardContent, CardMedia, Typography, Grid } from "@mui/material";

const ProductCard = ({ good }) => {
  return (

    <Grid item xs={12} sm={6} md={6} lg={3} xl={2}> {/* Adjust the grid item size according to your needs */}
      <h1>Mashhur</h1>

      <Card sx={{ maxWidth: 285, mb: 2, borderRadius: 3, marginTop: 4 }}>
        <CardMedia
          component="img"
          height="260"
          image={good && good.media[0]}
          alt=""
        />
        <CardContent>
          <Typography gutterBottom variant="h7" component="div">
            {good && good.title.slice(0, 48) + ".."}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Акция
          </Typography>
          <Typography variant="body2" bgcolor="yellow">
            {Math.floor((good && good.price * 12) / 100)} руб/мес
          </Typography>

          <div>
            <Typography variant="body2" color="text.primary">
              {good && good.price} руб
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {good && good.price - Math.floor((good.price * good.salePercentage) / 100)} руб
            </Typography>
          </div>
        </CardContent>
      </Card>
    </Grid>
  );
};

export default ProductCard;
