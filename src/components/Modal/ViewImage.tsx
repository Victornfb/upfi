import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalBody,
  Image,
  Link,
  Box,
} from '@chakra-ui/react';

interface ModalViewImageProps {
  isOpen: boolean;
  onClose: () => void;
  imgUrl: string;
}

export function ModalViewImage({
  isOpen,
  onClose,
  imgUrl,
}: ModalViewImageProps): JSX.Element {
  return (
    <>
      <Modal isOpen={isOpen} onClose={onClose} isCentered>
        <ModalOverlay />
        <ModalContent
          maxW="900px"
          maxH="600px"
          w="fit-content"
          h="fit-content"
          borderRadius="xl"
        >
          <ModalBody p="0px">
            <Image
              src={imgUrl}
              alt="Imagem aberta"
              objectFit="cover"
              align="right"
              maxW="900px"
              maxH="600px"
              borderTopRadius="md"
            />

            <Box py="2" px="2.5" bgColor="#353431" borderBottomRadius="md">
              <Link href={imgUrl} isExternal>
                Abrir original
              </Link>
            </Box>
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
}
