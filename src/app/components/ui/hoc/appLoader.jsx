import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {
  getMembersLoadingStatus,
  loadMembersList
} from '../../../store/memberSlice'
import SpinnerLoader from '../SpinnerLoader'

export default function AppLoader({ children }) {
  const dispatch = useDispatch()
  const isLoading = useSelector(getMembersLoadingStatus())

  useEffect(() => {
    dispatch(loadMembersList())
  }, [dispatch])

  if (isLoading) return <SpinnerLoader />

  return children
}
