import React from "react";
import { Box, Button, Container, Flex, Heading, Image, Link, SimpleGrid, Stack, Text, VStack, useColorModeValue } from "@chakra-ui/react";
import { FaInstagram, FaFacebookF, FaPinterestP, FaTwitter, FaShoppingCart } from "react-icons/fa";

const Index = () => {
  const jewelryItems = [
    { name: "Elegant Ring", price: "$95", imageSrc: "https://images.unsplash.com/photo-1527628173875-3c7bfd28ad78?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxlbGVnYW50JTIwcmluZ3xlbnwwfHx8fDE3MTAzMTk0MjZ8MA&ixlib=rb-4.0.3&q=80&w=1080" },
    { name: "Pearl Necklace", price: "$120", imageSrc: "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxwZWFybCUyMG5lY2tsYWNlfGVufDB8fHx8MTcxMDMxOTQyNnww&ixlib=rb-4.0.3&q=80&w=1080" },
    { name: "Gold Bracelet", price: "$150", imageSrc: "https://images.unsplash.com/photo-1633810543462-77c4a3b13f07?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxnb2xkJTIwYnJhY2VsZXR8ZW58MHx8fHwxNzEwMzE5NDI2fDA&ixlib=rb-4.0.3&q=80&w=1080" },
    { name: "Diamond Earrings", price: "$200", imageSrc: "https://images.unsplash.com/photo-1588444650733-d0767b753fc8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxkaWFtb25kJTIwZWFycmluZ3N8ZW58MHx8fHwxNzEwMzE5NDI2fDA&ixlib=rb-4.0.3&q=80&w=1080" },
  ];

  const bgColor = useColorModeValue("brand.800", "brand.900");
  const textColor = useColorModeValue("brand.700", "white");

  return (
    <Container maxW="container.xl" p={0}>
      {/* Navigation */}
      <Flex align="center" justify="space-between" py={4}>
        <Heading as="h1" size="lg">
          Millie Savage
        </Heading>
        <Stack direction="row" spacing={6}>
          <Link>Shop</Link>
          <Link>About</Link>
          <Link>Contact</Link>
          <Button variant="ghost">
            <FaShoppingCart />
          </Button>
        </Stack>
      </Flex>

      {/* Hero Section */}
      <Box bgImage="https://images.unsplash.com/photo-1492707892479-7bc8d5a4ee93?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxqZXdlbHJ5JTIwYmFubmVyfGVufDB8fHx8MTcxMDMxOTQyN3ww&ixlib=rb-4.0.3&q=80&w=1080" bgPosition="center" bgSize="cover" h="70vh" display="flex" alignItems="center" justifyContent="center">
        <VStack textAlign="center">
          <Heading as="h2" size="2xl" color="white">
            Find Your Sparkle
          </Heading>
          <Text color="white" fontSize="lg">
            Discover our exclusive jewelry collection.
          </Text>
          <Button mt={4} colorScheme="purple" size="lg">
            Shop Now
          </Button>
        </VStack>
      </Box>

      {/* Featured Products */}
      <SimpleGrid columns={{ base: 1, md: 2, lg: 4 }} spacing={10} py={10}>
        {jewelryItems.map((item) => (
          <Box key={item.name} bg={bgColor} borderRadius="lg" p={5} textAlign="center">
            <Image src={item.imageSrc} alt={item.name} borderRadius="lg" mb={4} />
            <Text fontWeight="bold">{item.name}</Text>
            <Text color={textColor}>{item.price}</Text>
          </Box>
        ))}
      </SimpleGrid>

      {/* Footer */}
      <Flex as="footer" align="center" justify="space-between" py={4} borderTopWidth={1} borderColor={textColor}>
        <Text>© 2023 Millie Savage Jewelry</Text>
        <Stack direction="row" spacing={4}>
          <Link>
            <FaInstagram />
          </Link>
          <Link>
            <FaFacebookF />
          </Link>
          <Link>
            <FaPinterestP />
          </Link>
          <Link>
            <FaTwitter />
          </Link>
        </Stack>
      </Flex>
    </Container>
  );
};

export default Index;
