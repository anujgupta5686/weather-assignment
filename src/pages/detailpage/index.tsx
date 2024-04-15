import { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import cloud from '../../assets/cloud.png';
import wind from '../../assets/wind.png';
import humidity from '../../assets/humidity.png';
import atmospheric_pressure from '../../assets/atmospheric_pressure.png';
import { Undo2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import Loadingpage from '@/components/commonComponent/Loadingpage';

const Detailpage = () => {
  const [loading, setLoading] = useState<boolean>(true);
  const [data, setData] = useState<any>();
  const location = useLocation();
  const navigate = useNavigate();
  const getdata = location?.search?.split('?')?.[1];

  useEffect(() => {
    if (getdata) {
      fetch(
        `https://api.openweathermap.org/data/2.5/weather?${getdata?.split('&')?.[0]}&${getdata?.split('&')?.[1]}&appid=d1845658f92b31c64bd94f06f7188c9c`
      )
        .then((response) => response.json())
        .then((responseData) => {
          console.log('responseData', responseData);
          setData(responseData);
          setLoading(false);
        })
        .catch((error) => {
          console.error('Error fetching data:', error);
          setLoading(false);
        });
    }
  }, []);
  let temp = (data?.main?.temp) - 273.15;
  let temp_fixed = temp.toFixed(1);

  return (
    <div className="w-full px-2 min-h-screen bg-gradient-to-r from-cyan-500 to-blue-500">
      {loading ? (
        <Loadingpage />
      ) : (
        <>
          <div className="py-5">
            <h1 className="text-center md:text-[2.2rem] text-[1.6rem] font-bold text-white transition-all">CURRENT WEATHER</h1>
          </div>
          <div className="lg:w-3/4 md:w-2/3 w-full mx-auto mt-10 shadow-2xl py-5" style={{ backgroundColor: 'rgba(188,180,0,0.08)' }}>
            <div className="flex justify-center gap-3 items-center py-2">
              <h1 className="font-semibold mg:text-[2rem] text-[1.5rem] text-slate-200 ">{data.name}</h1>
              <img src={`https://flagcdn.com/144x108/${data?.sys?.country.toLowerCase()}.png`} alt="Image" className="md:w-10 md:h-10 w-8 h-8 object-fill rounded-sm" />
            </div>

            <p className="text-center text-[1.3rem] text-slate-200 mt-3">{data?.weather?.[0]?.description}</p>


            <img src={`http://openweathermap.org/img/w/${data?.weather?.[0]?.icon}.png`} alt="" className="md:w-20 md:h-20 w-10 h-10 object-fill rounded-sm mx-auto mt-5" />
            <p className="text-center md:text-[2.2rem] text-[1.6rem] font-bold text-white transition-all mt-3">{`${temp_fixed} °C`}</p>
            <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-2 mt-4 py-5">
              <div className="md:w-44 w-60 h-36 rounded-md flex flex-col items-center justify-center mx-auto" style={{ backgroundColor: 'rgba(255,255,255,0.3)' }}>
                <img src={wind} alt="" className="md:w-[4rem] md:h-[4rem] w-8 h-8 object-fill" />
                <p className="text-center text-[1.3rem] text-white font-semibold">WINDSPEED</p>
                <p className="text-center text-[1.1rem] text-slate-100">{`${data?.wind?.speed} m/s`}</p>
              </div>
              <div className="md:w-44 w-60 h-36 rounded-md flex flex-col items-center justify-center mx-auto" style={{ backgroundColor: 'rgba(255,255,255,0.3)' }}>
                <img src={humidity} alt="" className="md:w-[4rem] md:h-[4rem] w-8 h-8 object-fill" />
                <p className="text-center text-[1.3rem] text-white font-semibold">HUMIDITY</p>
                <p className="text-center text-[1.1rem] text-slate-100">{`${data?.main?.humidity}%`} %</p>
              </div>
              <div className="md:w-44 w-60 h-36 rounded-md flex flex-col items-center justify-center mx-auto" style={{ backgroundColor: 'rgba(255,255,255,0.3)' }}>
                <img src={cloud} alt="" className="md:w-[4rem] md:h-[4rem] w-8 h-8 object-fill" />
                <p className="text-center text-[1.3rem] text-white font-semibold">CLOUDS</p>
                <p className="text-center text-[1.1rem] text-slate-100">{`${data?.clouds?.all}%`}</p>
              </div>
              <div className="md:w-44 w-60 h-36 rounded-md flex flex-col items-center justify-center mx-auto" style={{ backgroundColor: 'rgba(255,255,255,0.3)' }}>
                <img src={atmospheric_pressure} alt="" className="md:w-[4rem] md:h-[4rem] w-8 h-8 object-fill" />
                <p className="text-center text-[1.3rem] text-white font-semibold">PRESSURE</p>
                <p className="text-center text-[1.1rem] text-slate-100">{`${data?.main?.pressure}%`}</p>
              </div>
            </div>

            <Separator />
            <div className="flex justify-end px-5 mt-2">
              <Button className="bg-[rgba(255,255,255,0.3)] hover:bg-[rgba(255,255,255,0.2)] text-white" onClick={() => navigate(-1)}>
                <Undo2 className="mr-2 h-4 w-4" /> Go Back
              </Button>
            </div>
          </div>
        </>
      )
      }
    </div >
  );
};

export default Detailpage;
