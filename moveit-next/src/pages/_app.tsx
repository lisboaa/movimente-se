import '../styles/global.css';

import { ChallengeProvider } from '../contexts/ChallengesContext';

function MyApp({ Component, pageProps }) {
  return (
    <ChallengeProvider>
      <ChallengeProvider>
        <Component {...pageProps} />
      </ChallengeProvider>
    </ChallengeProvider>
  )
}

export default MyApp;
