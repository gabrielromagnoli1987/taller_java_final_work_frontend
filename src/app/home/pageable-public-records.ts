export interface PageablePublicRecords {
  content: any[],
  pageable: {
    sort: {
        sorted: Boolean,
        unsorted: Boolean,
        empty: Boolean
    },
    pageSize: Number,
    pageNumber: Number,
    offset: Number,
    paged: Boolean,
    unpaged: Boolean
  },
  totalPages: Number,
  totalElements: Number,
  last: Boolean,
  first: Boolean,
  sort: {
      sorted: Boolean,
      unsorted: Boolean,
      empty: Boolean
  },
  number: Number,
  numberOfElements: Number,
  size: Number,
  empty: Boolean
}

