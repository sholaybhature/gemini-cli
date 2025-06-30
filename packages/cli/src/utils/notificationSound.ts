import beeper from 'beeper';  
  
export const playNotificationSound = async () => {  
  try {  
    await beeper();  
  } catch (error) {  
    // Silently fail if beeper doesn't work (e.g., no audio device)  
    console.debug('Could not play notification sound:', error);  
  }  
};