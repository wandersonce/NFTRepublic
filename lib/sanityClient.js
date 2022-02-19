import sanityClient from '@sanity/client'

export const client = sanityClient({
  projectId: 'ecbljwfv',
  dataset: 'production',
  apiVersion: '2021-03-25',
  token:
    'skGQiydkPA2JgnZNI9tPd9UX2J9Z6AZHc5mpLZgxCWyevFtrIPklu0JQV8n7SUMctv4yk095KNrvu7jTr5iKAgFSU2wXz6FkVTQ2568zUpekVewQrSNsPrNCfboetyirQChCOzOSTpD1L58IsivdphBqQGVjX0cgf5lBgP3K3jYxRDlGmUdj',
  useCdn: false,
})
