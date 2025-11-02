import React from 'react';
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalCloseButton,
  VStack,
  Heading,
  Text,
  UnorderedList,
  ListItem,
  Box,
} from '@chakra-ui/react';

function PrivacyPolicy({ isOpen, onClose }) {
  return (
    <Modal isOpen={isOpen} onClose={onClose} size="4xl" scrollBehavior="inside">
      <ModalOverlay bg="blackAlpha.700" backdropFilter="blur(10px)" />
      <ModalContent
        bg="rgba(26, 32, 44, 0.95)"
        backdropFilter="blur(20px)"
        border="1px solid"
        borderColor="whiteAlpha.200"
        borderRadius="2xl"
        maxH="90vh"
        color="white"
      >
        <ModalHeader>
          <Heading size="xl" bgGradient="linear(to-r, brand.400, purple.400)" bgClip="text">
            Privacy Policy
          </Heading>
        </ModalHeader>
        <ModalCloseButton color="white" />
        <ModalBody pb={8}>
          <VStack align="start" spacing={6}>
            <Text color="gray.300">
              <strong>Effective Date:</strong> June 12, 2025
            </Text>
            <Text color="gray.200" lineHeight="tall">
              This personal portfolio website ("Site") is operated by Debarun Ghosh. Protecting your privacy is important. This Privacy Policy explains what information is (and is not) collected, how it is used, and your rights regarding your information.
            </Text>

            <Box>
              <Heading size="md" color="brand.300" mb={3}>Information Collection and Use</Heading>
              <UnorderedList spacing={3} color="gray.200" pl={4}>
                <ListItem>
                  <strong>No Personal Data Collection:</strong> This Site does not collect, store, or process any personal data from visitors. You can browse all content without providing any personal information.
                </ListItem>
                <ListItem>
                  <strong>Contact Form:</strong> If you choose to contact me via the contact form or email, your name, email address, and message will be used solely to respond to your inquiry. This information is not stored, shared, or used for marketing purposes.
                </ListItem>
                <ListItem>
                  <strong>Analytics:</strong> This Site does not use cookies, analytics, or tracking technologies to monitor visitors.
                </ListItem>
              </UnorderedList>
            </Box>

            <Box>
              <Heading size="md" color="brand.300" mb={3}>Third-Party Services</Heading>
              <UnorderedList spacing={3} color="gray.200" pl={4}>
                <ListItem>
                  <strong>GitHub API:</strong> The Projects section uses the public GitHub API to display repositories. No user data is collected or transmitted to GitHub from visitors.
                </ListItem>
                <ListItem>
                  <strong>LinkedIn Integration:</strong> This Site may display LinkedIn profile information or use LinkedIn developer tools for demonstration purposes only. No personal information or user data is collected, stored, or shared by this Site through LinkedIn integration.
                </ListItem>
                <ListItem>
                  <strong>External Links:</strong> This Site may contain links to external websites (e.g., GitHub, LinkedIn). I am not responsible for the privacy practices or content of these external sites. Please review their privacy policies separately.
                </ListItem>
              </UnorderedList>
            </Box>

            <Box>
              <Heading size="md" color="brand.300" mb={3}>Data Security</Heading>
              <Text color="gray.200" lineHeight="tall">
                This Site does not store any user data. Any information you voluntarily provide via the contact form is used only to respond to your inquiry and is not retained.
              </Text>
            </Box>

            <Box>
              <Heading size="md" color="brand.300" mb={3}>Children's Privacy</Heading>
              <Text color="gray.200" lineHeight="tall">
                This Site is not directed to children under the age of 13. No information is knowingly collected from children.
              </Text>
            </Box>

            <Box>
              <Heading size="md" color="brand.300" mb={3}>Changes to This Privacy Policy</Heading>
              <Text color="gray.200" lineHeight="tall">
                This Privacy Policy may be updated from time to time. Any changes will be posted on this page with an updated effective date.
              </Text>
            </Box>

            <Box>
              <Heading size="md" color="brand.300" mb={3}>Contact</Heading>
              <Text color="gray.200" lineHeight="tall">
                If you have any questions or concerns about this Privacy Policy, please contact me using the contact form on this Site or via the contact information provided.
              </Text>
            </Box>
          </VStack>
        </ModalBody>
      </ModalContent>
    </Modal>
  );
}

export default PrivacyPolicy;
