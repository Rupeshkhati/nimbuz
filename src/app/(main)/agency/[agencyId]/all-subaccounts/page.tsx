import { AlertDialog } from '@/components/ui/alert-dialog'
import { Button } from '@/components/ui/button'
import { Command, CommandEmpty, CommandGroup, CommandInput, CommandItem, CommandList } from '@/components/ui/command'
import { getAuthUserDetails } from '@/lib/queires'
import { SubAccount } from '@prisma/client'
import React from 'react'

type Props = {
    params: { agencyId: string }
}

const AllSubaccountsPage = async ({ params }: Props) => {
    const user = await getAuthUserDetails()
    if (!user) return

  return (
    <AlertDialog>
        <div className='flex flex-col'>
            <Button>Create</Button>
            <Command className='rounded-lg bg-transparent'>
                <CommandInput placeholder='Search Account...' />
                <CommandList>
                    <CommandEmpty>No Results Found</CommandEmpty>
                    <CommandGroup heading='Sub Accounts'>
                        {!!user.Agency?.SubAccount.length ? user.Agency.SubAccount.map((subaccount: SubAccount) => (
                            <CommandItem></CommandItem>
                        ))
                         : ''}
                    </CommandGroup>
                </CommandList>
            </Command>
        </div>
    </AlertDialog>
  )
}

export default AllSubaccountsPage