'use client'
import {APIProvider, Marker, Map} from '@vis.gl/react-google-maps'

export default function Home() {
  return (
    <main>
      <h1 className='text-center mt-32 mx-8 my-8 font-mono font-bold text-5xl'>got-a-haiku-4-u</h1>
      <div className='flex justify-center items-center'>
        <div className='flex-item' style={{height: '500px', width: '500px'}}>
          <APIProvider apiKey={process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY!}>
            <Map zoom={14} center={{lat: 30.32076069667155, lng: -97.77331880142793}} >
              <Marker position={{lat: 30.32076069667155, lng: -97.77331880142793}} />
            </Map>
          </APIProvider>
        </div>
      </div>
    </main>
  )
}
