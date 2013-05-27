# TokenHunter

Exports a single function that attempts to parse a token following a single rule from a string, 
that returns an object containing a *token* attribute containing the matching token if found and 
a *tail* attribute that contains the remaining part of the string.
If a matching token is not found returns an object with an *error* attribute with a description
of the error and a *tail* attribute containing the whole string.
