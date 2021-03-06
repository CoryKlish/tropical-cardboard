import { Button, Modal } from '@mantine/core'
import { FC, Dispatch, SetStateAction } from 'react'
import WalletBalance from './WalletBalance'

interface ModalState {
  opened: boolean
  setOpened: Dispatch<SetStateAction<boolean>>
}

const MintModal: FC<ModalState> = ({ opened, setOpened }) => {
  return (
    <>
      <Modal
        classNames={{
          title: 'text-center w-auto'
        }}
        centered
        opened={opened}
        onClose={() => setOpened(false)}
        title="5 Matic"
      >
        <div className="flex flex-row gap-4 justify-center">
          <Button variant="outline">Mint</Button>
          <Button variant="outline">Connect Wallet</Button>
        </div>
        <WalletBalance />
      </Modal>
    </>
  )
}

export default MintModal
