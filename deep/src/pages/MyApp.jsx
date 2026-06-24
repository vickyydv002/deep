const PLAY_STORE_URL =
  'https://play.google.com/store/apps/details?id=com.urjamitrauserapp'

export default function MyApp() {
  return (
    <div className="myapp-page">
      <div className="myapp-card">
        <h1>Urjamitra Partner</h1>
        <p>Download the app on your Android device from the Play Store.</p>
        <a
          href={PLAY_STORE_URL}
          className="btn btn-primary btn-lg"
          target="_blank"
          rel="noopener noreferrer"
        >
          Download on Play Store
        </a>
      </div>
    </div>
  )
}
