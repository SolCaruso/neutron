import * as React from "react";

const SVGComponent = props => <svg xmlns="http://www.w3.org/2000/svg" id="Layer_1" data-name="Layer 1" viewBox="0 0 451.74 118.94" {...props}><defs></defs><path d="M198.58 45.2H145.1l-10.07 32.13h53.38l2.82-9.17h23.47l-4.73 14.8c-.34 1.14-.89 2.28-1.66 3.43a13.23 13.23 0 0 1-2.82 3.02c-1.11.87-2.32 1.58-3.63 2.12s-2.7.81-4.18.81h-80.67c-2.15 0-3.83-.57-5.04-1.71-1.21-1.14-1.95-2.52-2.22-4.13-.2-1.21-.1-2.48.3-3.83l13.5-43.11c.4-1.14.99-2.28 1.76-3.43.77-1.14 1.7-2.15 2.77-3.02 1.07-.87 2.28-1.58 3.62-2.12 1.34-.54 2.75-.81 4.23-.81h80.67c2.15 0 3.81.56 4.99 1.66 1.17 1.11 1.9 2.43 2.17 3.98.27 1.34.1 2.69-.5 4.03h.1l-4.33 14.5h-23.37l2.92-9.17Zm44.31 32.13h53.38l14.7-47.13h23.37L315.1 92.34h-90.24c-2.15 0-3.83-.57-5.04-1.71-1.21-1.14-1.95-2.52-2.22-4.13-.2-1.21-.1-2.48.3-3.83l16.32-52.47h23.47l-14.8 47.13Z" fill='currentColor' /><path d="M439.48 35.84c-.27-1.55-.99-2.87-2.16-3.98-1.18-1.11-2.84-1.66-4.99-1.66h-80.67c-1.48 0-2.89.27-4.23.81-1.34.54-2.55 1.24-3.62 2.12-1.07.87-2 1.88-2.77 3.02-.77 1.14-1.36 2.28-1.76 3.42l-4.23 13.39c-.34 1.14-.4 2.28-.2 3.42.2 1.01.57 1.93 1.11 2.77.54.84 1.34 1.53 2.42 2.07-2.15.81-3.96 2.01-5.44 3.63-1.48 1.61-2.48 3.29-3.02 5.04l-4.13 12.79c-.4 1.34-.5 2.62-.3 3.83.27 1.61 1.01 2.99 2.22 4.13 1.21 1.14 2.89 1.71 5.04 1.71h80.67c1.48 0 2.87-.27 4.18-.81 1.31-.54 2.52-1.24 3.63-2.12a13.23 13.23 0 0 0 2.82-3.02c.77-1.14 1.33-2.28 1.66-3.42l4.13-12.69c.4-1.28.5-2.58.3-3.93-.34-2.15-1.51-3.79-3.52-4.93a14.36 14.36 0 0 0 5.09-3.27c1.44-1.44 2.53-3.04 3.27-4.78h.1l4.03-13.5h-.1c.61-1.34.77-2.68.5-4.03Zm-35.35 41.49h-53.38l2.68-8.56h53.41l-2.72 8.56Zm7.35-23.56h-53.34l2.68-8.56h53.48l-2.82 8.56Zm-137.65 17.5 30.82-40.82-26.12-.19 9.82-29.1c.37-.96-.95-1.64-1.52-.78-3.74 5.62.61-.95-24.66 37.23-1.11 1.68.08 3.93 2.09 3.93h19.65l-11.54 28.84c-.4.92.83 1.66 1.46.88Z" fill='red' /><path d="m0 118.77 5.64-15.51h16.97l-1.31 3.6H9.09l-.9 2.49h11.56l-1.17 3.21H7.02l-.91 2.48H18.6l-1.36 3.73H0zm35.99 0-4.83-11.27h-.04l-4.1 11.27h-4.76l5.64-15.51h7.38l4.83 11.27h.04l4.1-11.27h4.76l-5.65 15.51h-7.37zm12.73 0 5.65-15.51h16.96l-1.31 3.6H57.81l-.9 2.49h11.57l-1.17 3.21H55.74l-.91 2.48h12.49l-1.36 3.73H48.72zm29.89-7.88h7.86c1.29 0 1.94-.51 2.35-1.63l.19-.51c.5-1.37-.09-1.63-1.59-1.63h-7.43l-1.37 3.77Zm-1.98-7.63h14.35c3.66 0 3.99 1.82 2.97 4.61l-.36.98c-.76 2.08-1.67 3.3-4.05 3.81l-.02.04c1.32.26 2.27.88 1.35 3.43l-.96 2.63h-4.76l.68-1.86c.59-1.63.32-2.16-1.16-2.16h-7.48l-1.47 4.03h-4.76l5.65-15.51Zm22.03 5.44c1.65-4.54 4.59-5.61 8.88-5.61h7.16c5.4 0 5.44 1.95 4.34 4.97l-.18.49h-4.67c.56-1.54-.25-1.74-1.77-1.74h-5.16c-2.4 0-3.23.58-4.2 3.24l-.7 1.93c-.97 2.66-.56 3.24 1.84 3.24h5.08c1.24 0 2.56-.19 3.1-1.69l.16-.45h-5.91l1.17-3.21h10.67l-1.61 4.41c-1.62 4.46-4.01 4.67-9.37 4.67h-5.72c-4.28 0-6.44-1.07-4.79-5.61l1.68-4.63Zm28.71 10.07 1.97-5.4-4.91-10.11h5.74l2.92 6.34 7.53-6.34h5.74l-12.27 10.11-1.96 5.4h-4.76zm33.3-10.07c1.65-4.54 4.59-5.61 8.88-5.61h5.59c6.77 0 7.12 1.46 5.48 5.85h-4.76l.16-.43c.41-1.11-.29-1.44-1.71-1.44h-5.18c-2.51 0-3.41 1.18-4.11 3.11l-.61 1.67c-.82 2.25-.66 3.11 1.59 3.11h5.08c2.14 0 2.86-.21 3.56-2.14h4.76l-.53 1.46c-.95 2.61-2.64 4.67-7.42 4.67h-7.67c-4.28 0-6.44-1.07-4.79-5.61l1.68-4.63Zm28.63 3.15c-.82 2.25-.66 3.11 1.59 3.11h6.08c2.25 0 3.03-.86 3.85-3.11l.61-1.67c.7-1.93.66-3.11-1.85-3.11h-5.57c-2.51 0-3.41 1.18-4.11 3.11l-.61 1.67Zm-3.74-3.15c1.65-4.54 4.59-5.61 8.88-5.61h7.63c4.29 0 6.45 1.07 4.79 5.61l-1.68 4.63c-1.65 4.54-4.59 5.61-8.88 5.61h-7.63c-4.28 0-6.44-1.07-4.79-5.61l1.68-4.63Zm36.38 10.07-4.83-11.27h-.04l-4.1 11.27h-4.76l5.64-15.51h7.37l4.84 11.27h.04l4.1-11.27h4.76l-5.65 15.51h-7.37zm18.28 0 4.24-11.65h-6.68l1.4-3.86h18.12l-1.4 3.86h-6.68l-4.25 11.65h-4.75zm23.29-7.88h7.86c1.29 0 1.94-.51 2.35-1.63l.19-.51c.5-1.37-.09-1.63-1.59-1.63h-7.43l-1.37 3.77Zm-1.98-7.63h14.35c3.66 0 3.99 1.82 2.97 4.61l-.36.98c-.76 2.08-1.67 3.3-4.05 3.81l-.02.04c1.32.26 2.27.88 1.35 3.43l-.96 2.63h-4.76l.68-1.86c.59-1.63.32-2.16-1.16-2.16h-7.48l-1.47 4.03h-4.76l5.65-15.51Zm25.77 8.59c-.82 2.25-.66 3.11 1.59 3.11h6.08c2.25 0 3.03-.86 3.85-3.11l.61-1.67c.7-1.93.66-3.11-1.85-3.11h-5.57c-2.51 0-3.41 1.18-4.11 3.11l-.61 1.67Zm-3.74-3.15c1.65-4.54 4.59-5.61 8.88-5.61h7.63c4.29 0 6.45 1.07 4.79 5.61l-1.68 4.63c-1.65 4.54-4.59 5.61-8.88 5.61h-7.63c-4.28 0-6.44-1.07-4.79-5.61l1.68-4.63Zm22.65 10.07 5.64-15.51h4.76l-4.19 11.53h10.69l-1.45 3.98h-15.45zm37.97-15.51h4.76l-3.26 8.95c-.72 1.97-.29 2.74 1.66 2.74h4.71c1.95 0 2.94-.77 3.65-2.74l3.26-8.95h4.76l-3.63 9.98c-1.4 3.86-4.07 5.7-8.44 5.7h-6.81c-4.37 0-5.69-1.84-4.29-5.7l3.63-9.98Zm32.99 15.51-4.83-11.27h-.05l-4.1 11.27h-4.75l5.64-15.51h7.37l4.83 11.27h.05l4.1-11.27h4.75l-5.64 15.51h-7.37zm18.63-15.51h4.75l-5.64 15.51h-4.76l5.65-15.51zm10.27 15.51 4.24-11.65h-6.68l1.4-3.86h18.13l-1.41 3.86h-6.68l-4.24 11.65h-4.76zm-302.3-41.44-1.67 5.34c-.19.64-.31 1.26-.36 1.86l2.17-7.2h-.14Z" fill='currentColor' /><path d="m113.84 45.2.91-2.95-.92 2.95h.01z" /><path d="m35.49 68.77-.2.64.2-.64zm80.2-32.83a7.726 7.726 0 0 0-2.01-4.03c-1.07-1.14-2.72-1.71-4.93-1.71H33.61c-1.41 0-2.77.27-4.08.81s-2.5 1.24-3.58 2.12c-1.07.87-2.01 1.88-2.82 3.02-.81 1.14-1.41 2.28-1.81 3.42L7.82 82.68c-.4 1.34-.5 2.62-.3 3.83.27 1.61 1.01 2.99 2.22 4.13 1.21 1.14 2.89 1.71 5.04 1.71h84.6l2.36-7.81c.06-.61.17-1.23.36-1.86l1.67-5.34H32.8l1.36-4.35 1.12-3.57.2-.64 5.98-19.06.35-1.11 1.06-3.4h70.95l.93-2.96.74-2.38c.33-1.48.4-2.78.2-3.93ZM34.17 72.98l1.12-3.57-1.12 3.57z" fill='currentColor' /><path d="M44.19 68.77h62.26l4.7-15H48.89l-4.7 15z" fill='currentColor' /><path d="M444.38 30.79h-1.39v-.59h3.41v.59h-1.39v3.74h-.62v-3.74Zm2.97-.59h.66l1.55 2.38 1.53-2.38h.65v4.34h-.61v-3.32l-1.55 2.35h-.08l-1.53-2.35v3.32h-.62V30.2Z" fill='red' /></svg>;

export default SVGComponent;