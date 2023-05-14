import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {
  getMembersLoadingStatus,
  loadMembersList
} from '../../../store/memberSlice'

export default function AppLoader({ children }) {
  const dispatch = useDispatch()
  const isLoading = useSelector(getMembersLoadingStatus())

  useEffect(() => {
    dispatch(loadMembersList())
  }, [])

  if (isLoading)
    return (
      <>
        <div class='d-flex justify-content-center'>
          <div class='spinner-border' role='status'>
            <span class='sr-only'></span>
          </div>
        </div>
      </>
    )

  return children
}
