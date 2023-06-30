import './globals.css'

export const metadata = {
  title: 'Weather App',
  description: 'Weather App created in next.js',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-9ndCyUaIbzAi2FUVXJi0CjmCapSmO7SnpJef0486qhLnuZ2cdeRhO02iuK6FUUVM" crossOrigin="anonymous"></link>
      </head>
      <body style={{ backgroundColor: "rgb(51, 51, 51)" }}>
        {children}
      </body>
    </html>
  )
}
