import { AppState } from '../../store'
import { useSelector } from 'react-redux'

interface Props {
  myServer: string
  // eslint-disable-next-line no-unused-vars
  func: (srv: string) => void
}

const SelectChangeServer = ({ myServer, func }: Props) => {
  const listServer = useSelector((state: AppState) => state.server.listServer)

  return (
    <form className='mr-2 mt-1 md:mb-0'>
      <div className='flex'>
        <label
          id='states-button'
          data-dropdown-toggle='dropdown-states'
          className='flex-shrink-0 z-10 inline-flex items-center py-2.5 px-4 text-sm font-medium text-center text-gray-500 bg-gray-100 border border-gray-300 rounded-s-lg hover:bg-gray-200 focus:ring-4 focus:outline-none focus:ring-gray-100 dark:bg-slate-950 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:text-white dark:border-gray-700'
          htmlFor='states'
        >
          Nguồn
        </label>

        <select
          value={myServer}
          onChange={(e) => func(e.target.value)}
          id='states'
          className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-e-lg border-s-gray-100 dark:border-s-gray-900 border-s-2 focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-900 dark:border-gray-800 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
        >
          {listServer.map((srv) => (
            <option value={srv} key={srv}>
              {srv}
            </option>
          ))}
        </select>
      </div>
    </form>
  )
}

export default SelectChangeServer
