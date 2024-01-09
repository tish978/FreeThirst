import UserCard from '@/components/shared/UserCard'
import { useToast } from '@/components/ui/use-toast'
import { useGetUsers } from '@/lib/react-query/queriesAndMutations'
import { Loader } from 'lucide-react'
import React from 'react'

const AllUsers = () => {

  const { toast } = useToast()

  const { data: creators, isPending, isError: isErrorCreators } = useGetUsers()

  if(isErrorCreators){
    return toast({ title: 'Something went wrong.'})
  }

  return (
    <div className='common-container'>
      <div className='user-container'>
        <h2 className='h3-bold md:h2-bold text-left w-full'>
          All Users
        </h2>
        {isPending && !creators ? (
          <Loader />
        ) : (
          <ul className='user-grid'>
            {creators?.documents.map((creator) => (
              <li>
                <UserCard user={creator}/>
              </li>
            ))}  
          </ul>
        )}
      </div>
    </div>
  )
}

export default AllUsers