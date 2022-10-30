import gql from 'graphql-tag';
import { PAGINATION_QUERY } from '../components/Shop/Pagination';

export default function paginationField() {
  return {
    keyArgs: false, /// WE TELL APOLLO THAT WE DEAL WITH DATA OURSELVES ///

    read(existing, { args, cache }) {
      const { skip, first } = args;

      /// GET HOW MANY ITEMS ARE IN TOTAL
      const data = cache.readQuery({ query: PAGINATION_QUERY });
      const count = data?._allCatsMeta?.count;

      /// WHAT PAGE DO THE ITEMS BELONG TO
      const page = skip / first + 1;
      /// TOTAL NUMBER OF PAGES
      const pages = Math.ceil(count / first);
      /// GET ONLY ITEMS FOR PAGE
      const items = existing.slice(skip, skip + first).filter((item) => item);

      /// IF WE ARE ON THE LAST PAGE, AND THERE IS NOT ENOUGH ITEMS TO FILL IT, JUST RETURN THE REMAINING ITEMS
      if (items.length && items.length !== first && page === pages) {
        return items;
      }

      /// NO ITEMS IN CACHE CASE
      if (items.length !== first) {
        return false;
      }

      /// ITEMS IN CACHE
      if (items.length) {
        return items;
      }

      return false;
    },

    merge(existing, incoming, { args }) {
      const { skip, first } = args;

      const merged = existing ? existing.slice(0) : [];

      for (let i = skip; i < skip + incoming.length; ++i) {
        merged[i] = incoming[i - skip];
      }

      return merged;
    },
  };
}
