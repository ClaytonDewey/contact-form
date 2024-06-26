import { useState } from 'react';

const heading = 'Contact Me';

const Contact = (props) => {
  const [formSubmitted, setFormSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormSubmitted(true);
  };

  return (
    <div className='bg-amber-50'>
      <div
        id='contact'
        className='mx-auto flex flex-col min-h-screen justify-center items-center'>
        <h1 className='text-3xl font-bold leading-tight text-yellow-900 text-center'>
          {heading}
        </h1>

        <form
          className='w-2/3 md:w1/3 space-y-8 flex flex-col'
          onSubmit={handleSubmit}>
          <div>
            <input
              type='text'
              name='name'
              id='name'
              className='border-b border-yellow-900 placeholder-zinc-500 bg-transparent focus:outline-none w-full mt-12 xl:mt-36 py-3 transition-transform hover:border-b-2'
              placeholder='Name'
            />
          </div>
          <div>
            <input
              type='text'
              name='number'
              className='border-b border-yellow-900 placeholder-zinc-500 bg-transparent focus:outline-none w-full py-3 transition-transform hover:border-b-2'
              placeholder='Number'
            />
          </div>
          <div>
            <textarea
              name='message'
              className='border-b border-yellow-900 placeholder-zinc-500 bg-transparent focus:outline-none w-full py-3 transition-transform hover:border-b-2'
              rows='4'
              placeholder='Message'></textarea>
          </div>
          <button
            type='submit'
            className={`bg-amber-950 text-amber-50 mx-auto mt-4 p-2 w-48 ${
              formSubmitted ? 'opacity-50 cursor-not-allowed' : ''
            }`}
            disabled={formSubmitted}>
            {formSubmitted ? 'Sent!' : 'Send'}
          </button>

          {formSubmitted && (
            <div className='text-sm font-bold text-yellow-900 text-center mt-4'>
              Message sent successfully. I look forward to meeting you!
            </div>
          )}
        </form>
      </div>
    </div>
  );
};
export default Contact;
