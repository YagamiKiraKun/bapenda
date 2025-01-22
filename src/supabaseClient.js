import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://eqcxtqctngivgazzhudt.supabase.co'; // Ganti dengan Project URL
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImVxY3h0cWN0bmdpdmdhenpodWR0Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3Mzc1Mjg2NTIsImV4cCI6MjA1MzEwNDY1Mn0.ap_uwHCdsSfWp_68XLYyTkmFz2ZjDV9BImSv8E5K3Q4'; // Ganti dengan Anon Key

export const supabase = createClient(supabaseUrl, supabaseAnonKey);