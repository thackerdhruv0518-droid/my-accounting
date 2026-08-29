// ============================================
// MY ACCOUNTING - SUPABASE CONNECTION
// ============================================

const SUPABASE_URL =
    "https://qvpcbjewdrdqyoeduclv.supabase.co";

const SUPABASE_KEY =
    "sb_publishable_KDJPewVdmZJXGBZGRXDwKA_eiCcoQOv";


// ============================================
// SUPABASE CLIENT
// ============================================

const supabaseClient =
    window.supabase.createClient(
        SUPABASE_URL,
        SUPABASE_KEY
    );