import '../styles/style.css';

function Website({ Component, pageProps, router }) {
  return <Component {...pageProps} key={router.route} />
}
export default Website