import React, {useContext} from 'react'
import {useParams} from 'react-router-dom'
import {AppContext} from '../context/AppContext'

const Appointment = () => {

  const {doctors} = useContext(AppContext);
  const {docId} = useParams();

  const [docInfo, setDocInfo] = useState({});

  const fetchDocInfo = async () => {
    const docInfo = doctors.find( doc => doc._id === docId);
    setDocInfo(docInfo);
  }

  useEffect(() => {
    fetchDocInfo();
  }, []);

  return (
    <div>Appointment</div>
  )
}

export default Appointment
