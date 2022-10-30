import styled from 'styled-components';
import Link from 'next/link';
import gql from 'graphql-tag';
import { useQuery } from '@apollo/client';
import Head from 'next/head';
import Loading from '../Other/Loading';
import ErrorMessage from '../../utils/Error';
import { perPage } from '../../utils/config';

export const PAGINATION_QUERY = gql`
  query {
    _allCatsMeta {
      count
    }
  }
`;

const PaginationStyles = styled.div`
  width: 95vw;
  height: 3vh;
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
  /* position: fixed;
  bottom: 5%;
  left: 25%; */
  margin-bottom: 5vh;
  background-color: var(--blue1);
  color: white;

  a {
    text-decoration: none;
    color: white;
    &:hover {
      text-decoration: underline;
    }
  }
`;

export default function Pagination({ page }) {
  const { error, loading, data } = useQuery(PAGINATION_QUERY);
  if (error) return <ErrorMessage error={error} />;
  if (loading) return <Loading />;
  const { count } = data._allCatsMeta;
  const pageCount = Math.ceil(count / perPage);
  return (
    <PaginationStyles>
      <Head>
        <title>Only Cats | Page {page}</title>
      </Head>
      <Link href={`/shop/${page - 1}`}>
        <a aria-disabled={page <= 1}>Prev</a>
      </Link>
      <div>
        Page {page} of {pageCount}
      </div>
      <Link href={`/shop/${page + 1}`}>
        <a aria-disabled={page >= pageCount}>Next</a>
      </Link>
    </PaginationStyles>
  );
}
