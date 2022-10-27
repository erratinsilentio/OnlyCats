import gql, { useMutation, useQuery } from '@apollo/client';
import Router from 'next/router';
import ErrorMessage from '../../utils/Error';
import useForm from '../../utils/useForm';
import Form from '../Sell/Form';

const SINGLE_CAT_QUERY = gql`
  query SINGLE_CAT_QUERY($id: ID!) {
    Cat(where: { id: $id }) {
      id
      name
      description
      price
    }
  }
`;
