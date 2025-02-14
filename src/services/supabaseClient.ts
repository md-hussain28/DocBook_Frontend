// src/services/supabaseClient.ts
import { createClient, SupabaseClient } from '@supabase/supabase-js';

const SUPABASE_URL: string =
  import.meta.env.VITE_SUPABASE_URL ??
  (() => {
    throw new Error('VITE_SUPABASE_URL is not set');
  })();

const SUPABASE_ANON_KEY: string =
  import.meta.env.VITE_SUPABASE_ANON_KEY ??
  (() => {
    throw new Error('VITE_SUPABASE_ANON_KEY is not set');
  })();

console.log('ENV Data :', SUPABASE_ANON_KEY, SUPABASE_URL);

class SupabaseService {
  private static instance: SupabaseClient;

  private constructor() {}

  public static getInstance(): SupabaseClient {
    if (!SupabaseService.instance) {
      SupabaseService.instance = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);
    }
    return SupabaseService.instance;
  }
}

export const supabase = SupabaseService.getInstance();
