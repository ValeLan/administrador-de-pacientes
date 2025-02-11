import {toast} from 'react-toastify'
import type { Patient } from "../types"
import PatientDetailitem from "./PatientDetailitem"
import { usePatientStore } from "../store"

type PatientDetailsProps = {
    patient: Patient
}

const PatientDetails = ({ patient }: PatientDetailsProps) => {

    const deletePatient = usePatientStore(state => state.deletePatient)
    const getPatientById = usePatientStore(state => state.getPatientById)

    const handleClick = () => {
            deletePatient(patient.id)
            toast.error("Paciente eliminado")
    }

    return (
        <div className="mx-5 my-10 px-5 py-10 bg-white shadow-md rounded-xl">
            <PatientDetailitem label={"ID"} data={patient.id} />
            <PatientDetailitem label={"Nombre"} data={patient.name} />
            <PatientDetailitem label={"Propietario"} data={patient.caretaker} />
            <PatientDetailitem label={"Email"} data={patient.email} />
            <PatientDetailitem label={"Fecha Alta"} data={patient.date.toString()} />
            <PatientDetailitem label={"Síntomas"} data={patient.symptoms} />

            <div className="flex flex-col lg:flex-row gap-3 justify-between mt-10">
                <button
                    className="py-2 px-10 bg-indigo-600 hover:bg-indigo-700 text-white font-bold uppercase rounded-lg"
                    type="button"
                    onClick={() => getPatientById(patient.id)}
                >
                    Editar
                </button>

                <button
                    className="py-2 px-10 bg-red-600 hover:bg-red-700 text-white font-bold uppercase rounded-lg"
                    type="button"
                    onClick={handleClick}
                >
                    Eliminar
                </button>
            </div>
        </div>
    )
}

export default PatientDetails