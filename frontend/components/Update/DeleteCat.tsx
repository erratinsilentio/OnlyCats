import { useMutation } from '@apollo/client';
import gql from 'graphql-tag';

const DELETE_CAT_MUTATION = gql`
  mutation DELETE_CAT_MUTATION($id: ID!) {
    deleteCat(id: $id) {
      id
      name
    }
  }
`;

/// UPDATING CACHE TO RE-RENDER OUR DISPLAY ///
function update(cache, payload) {
  cache.evict(cache.identify(payload.data.deleteCat));
}

export default function DeleteCat({ id, children, className }) {
  const [deleteCat, { loading, error }] = useMutation(DELETE_CAT_MUTATION, {
    variables: { id },
    update,
  });

  return (
    <button
      type="button"
      className={className}
      disabled={loading}
      onClick={(e) => {
        if (confirm('u sure bro?')) {
          deleteCat().catch((err) => alert(err.message));
        }
        e.stopPropagation();
      }}
    >
      {children}
    </button>
  );
}
