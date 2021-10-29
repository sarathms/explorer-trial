import { useRouter } from 'next/router'

const MeasurementPage = (props) => {
  console.log('Does this even run server side?')
  console.log('props', props)
  console.log(`report_id: ${props.report_id}`)
  return (<div> { props.report_id } </div>)
}

export async function getServerSideProps({ query }) {
  console.log('getServerSideProps', query)
  return {
    props: {
      report_id: query.report_id[0]
    }
  }
}

export default MeasurementPage
