import { useDisclosure, Flex, Heading } from '@chakra-ui/react';

import ConnectButton from '../components/ConnectButton';
import AccountModal from '../components/AccountModal';

const Header = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <Flex alignItems="center" justifyContent="space-between" mb={5}>
      <Heading size="lg" color="white">
        React Web3 Example
      </Heading>
      <ConnectButton handleOpenModal={onOpen} />
      <AccountModal isOpen={isOpen} onClose={onClose} />
    </Flex>
  );
};

export default Header;
