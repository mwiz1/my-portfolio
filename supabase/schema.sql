CREATE TABLE anonymous_messages (
  id uuid DEFAULT gen_random_uuid() PRIMARY KEY,
  created_at timestamp WITH time zone DEFAULT timezone('utc'::text, now()) NOT NULL,
  message text NOT NULL,
  category text DEFAULT 'general',
  is_read boolean DEFAULT false
);

ALTER TABLE anonymous_messages ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Allow public insert only"
ON anonymous_messages FOR INSERT
WITH CHECK (true);
