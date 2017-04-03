# From
# http://stackoverflow.com/questions/2380553/sqlite-run-multi-line-sql-script-from-file

import sqlite3


def create_session_database():
    connection = sqlite3.connect('unplatform.sqlite3')
    with open('sql/session_schema.sql', 'rb') as session_schema:
        c = connection.cursor()
        c.execute(session_schema.read())
        connection.commit()
        c.close()
        connection.close()

#-----------------------------------------------------------------------------

if __name__=='__main__':
    create_session_database()
