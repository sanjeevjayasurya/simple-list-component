# Virtualized List Implementation

Instead of rendering thousand results at a time we can render the results only 
that are needed and as the user scrolls, unmount the rest. This technique is called windowing 
or virtualization. This concept is very important in React Native and thus it is 
shipped with Flatlist. 

This is a simple implementation of such a list.
