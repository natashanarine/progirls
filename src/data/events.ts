export interface Event {
  id: string;
  title: string;
  date: string;
  time?: string;
  location?: string;
  description?: string;
  lumaUrl: string;
}

// Add events here — each entry generates a card in the Events section.
// Paste your lu.ma event link into lumaUrl.
export const events: Event[] = [
  {
    id: '1',
    title: 'loop & lounge',
    date: 'Thursday, April 23',
    time: '3:00 PM – 5:00 PM',
    location: '55 Park Pl NE, Room 1118',
    description:
      'Join us for the launch of progirls — a program under progsu. Pushing a more exclusive yet inclusive environment for women. Destress before finals and come hear about exciting conferences and new initiatives we\'re planning to help women connect, grow, and find internship opportunities. We will have a variety of programming themed mocktails to enjoy and bracelets to make as you meet our team and other likeminded members!',
    lumaUrl: 'https://luma.com/9bwe623i',
  },
];
