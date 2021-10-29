import { useRouter } from 'next/router'

const MeasurementPage = (props) => {
  console.log('Does this even run server side?')
  console.log('props', props)
  console.log(`report_id: ${props.report_id}`)
  return (<div> On preview branch { JSON.stringify(props, null, 2)} </div>)
}

export async function getServerSideProps({ query }) {
  let initialProps = {
    errors: [],
    ssrRequests: {}
  }
  const report_id = query?.report_id?.[0]
  if (typeof report_id !== 'string' || report_id.length < 1) {
    initialProps.notFound = true
    initialProps.ssrRequests = {
      message: `failed early. could not find a report_id: ${report_id} (${typeof report_id})`
    }
    return {
      props: initialProps
    }
  } else {
    initialProps.report_id = report_id
    initialProps.letssee = 'test'
    return {
      props: initialProps
    }
  }
}

export default MeasurementPage
