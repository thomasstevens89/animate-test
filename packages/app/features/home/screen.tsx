import * as React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useLink } from "solito/link";

const drawerWidth = 210;


import { Stack, XStack, YStack, ZStack, Text, Button, styled } from '@my/ui'
import { Menu } from '@tamagui/lucide-icons';


export const HomeScreen = () => {

  const signInLinkProps = useLink({
    href: "/signin",
  });

  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  
  return (
    <XStack bc={"$backgroundSoft"} flex={1} fullscreen>

        
          <Button size={"$3"} p={"$1"} onClick={handleDrawerToggle} chromeless icon={Menu} scaleIcon={2.5} />
       
      
          {/* This works */}
          <AnimatePresence>
          {mobileOpen && (
            <motion.div
              key={"test"}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}>
                This is a test of motion.div
            </motion.div>
          )}
          {mobileOpen && (
            <YStack
                className='Drawer'
                zIndex={2002}
                bg={"#eee"}
                height={"100%"}
                width={drawerWidth}
                ov={"scroll"}
                key={"drawer"}
                animation={"lazy"}
                x={0}
                enterStyle={{
                  x: -drawerWidth
                }}
                exitStyle={{
                  x: 0
                }}
              >
              <Text>Mobile Drawer</Text>
      
            </YStack>
          )}
          </AnimatePresence>

        </XStack>
      
  );
}