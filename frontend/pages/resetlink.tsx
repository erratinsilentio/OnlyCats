import ResetLink from '../components/Reset/ResetLink';

export default function ResetPage({ query }) {
  console.log(query);
  if (!query?.token) {
    return (
      <div>
        <p>where is the token?!</p>
      </div>
    );
  }
  return (
    <div>
      <p>reset with token: {query.token}</p>
      <ResetLink token={query.token} />
    </div>
  );
}
