import { definePreset } from '@primeng/themes';
import Aura from '@primeng/themes/aura';

export const MyTheme = definePreset(Aura, {
    semantic: {
        colorScheme: {
            light: {
                primary: {
                    0: '#ffffff',
                    50:  '{blue.50}',
                    100: '{blue.100}',
                    200: '{blue.200}',
                    300: '{blue.300}',
                    400: '{blue.400}',
                    500: '{blue.500}',
                    600: '{blue.600}',
                    700: '{blue.700}',
                    800: '{blue.800}',
                    900: '{blue.900}',
                    950: '{blue.950}'
                },
                highlight:{
                    background: '{indigo.50}',
                    focusbackground: '{indigo.100}',
                    hoverbackground: '{indigo.200}',
                    color: '{indigo.900}',
                    focuscolor: '{indigo.900}',
                    hovercolor: '{indigo.900}',
                },
                custom:{
                    
                }
            },
            dark: {
                primary: {
                    0: '#ffffff',
                    50: '{slate.50}',
                    100: '{slate.100}',
                    200: '{Blue.200}',
                    300: '{Blue.300}',
                    400: '{Blue.400}',
                    500: '{Blue.500}',
                    600: '{Blue.600}',
                    700: '{Blue.700}',
                    800: '{Blue.800}',
                    900: '{Blue.900}',
                    950: '{Blue.950}'
                },
                highlight:{
                    background: 'rgba(250,250, 250, .16)',
                    focusbackground: 'rgba(250,250, 250, .24)',
                    hoverbackground: 'rgba(250,250, 250, .87)',
                    color: '{indigo.900}',
                    focuscolor: '{indigo.900}',
                    hovercolor: '{indigo.900}',
                },
            }
        }
    }
});
