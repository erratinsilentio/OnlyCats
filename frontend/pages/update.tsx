import UpdateCat from '../components/Update/UpdateCat';

export default function ({ query }) {
  return <UpdateCat id={query.id} />;
}
