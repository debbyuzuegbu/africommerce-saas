<<<<<<< HEAD
import classes from './Categories.module.css';

import { Link } from 'react-router-dom';
import AllCategoriesTable from '../CategoriesTable';
import { useEffect, useState } from 'react';

export const Categories = () => {
  const [product, setProduct] = useState([]);
  useEffect(() => {
    fetch('https://fakestoreapi.com/products?limit=5')
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        return setProduct(data);
      });
  }, [setProduct]);
  return (
    <div className={classes.container}>
      <div className={classes.product_header}>
        <span className={classes.title}>All Product</span>
        <span>
          {' '}
          <Link to="">
            <button className={classes.button}>Add New Product</button>
          </Link>
        </span>
      </div>
      <div>
        <AllCategoriesTable data={product} />
      </div>
    </div>
  );
};
=======
import classes from './Categories.module.css';

import { Link } from 'react-router-dom';
import AllCategoriesTable from '../CategoriesTable';
import { useEffect, useState } from 'react';

export const Categories = () => {
  const [product, setProduct] = useState([]);
  useEffect(() => {
    fetch('https://fakestoreapi.com/products?limit=5')
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        return setProduct(data);
      });
  }, [setProduct]);
  return (
    <div className={classes.container}>
      <div className={classes.product_header}>
        <span className={classes.title}>All Product</span>
        <span>
          {' '}
          <Link to="">
            <button className={classes.button}>Add New Product</button>
          </Link>
        </span>
      </div>
      <div>
        <AllCategoriesTable data={product} />
      </div>
    </div>
  );
};
>>>>>>> 72cc9905769d7d18cc04636286c0cd9212b63391
