#!/bin/bash
#
echo "POSTGRES DATABASE BACKUP SCRIPT!"
#

BACKUP_DIR=/pg_backup
DAYS_TO_KEEP=14
FILE_SUFFIX=_pg_backup.sql
DATABASE=dvdrental
USER=webonise
PASSWORD=webonise123#

FILE=`date +"%Y%m%d%H%M"`${FILE_SUFFIX}

OUTPUT_FILE=${BACKUP_DIR}/${FILE}

# do the database backup (dump)
# use this command for a database server on localhost. add other options if need be.
pg_dump -U ${webonise} ${dvdrental} -F p -f ${dvdrental.sql}

# gzip the mysql database dump file
gzip $OUTPUT_FILE

# show the user the result
echo "${OUTPUT_FILE}.gz was created:"
ls -l ${OUTPUT_FILE}.gz

# prune old backups
find $BACKUP_DIR -maxdepth 1 -mtime +$DAYS_TO_KEEP -name "*${FILE_SUFFIX}.gz" -exec rm -rf '{}' ';'
