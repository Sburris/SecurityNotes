# HELP file_uploads_count Total number of successful file uploads grouped by file type.
# TYPE file_uploads_count counter

# HELP file_upload_errors Total number of failed file uploads grouped by file type.
# TYPE file_upload_errors counter

# HELP juiceshop_startup_duration_seconds Duration juiceshop required to perform a certain task during startup
# TYPE juiceshop_startup_duration_seconds gauge
juiceshop_startup_duration_seconds{task="cleanupFtpFolder",app="juiceshop"} 0.0693756
juiceshop_startup_duration_seconds{task="validateConfig",app="juiceshop"} 0.0619225
juiceshop_startup_duration_seconds{task="validatePreconditions",app="juiceshop"} 0.1236844
juiceshop_startup_duration_seconds{task="restoreOverwrittenFilesWithOriginals",app="juiceshop"} 0.0890498
juiceshop_startup_duration_seconds{task="datacreator",app="juiceshop"} 3.2325299
juiceshop_startup_duration_seconds{task="customizeApplication",app="juiceshop"} 0.009256
juiceshop_startup_duration_seconds{task="customizeEasterEgg",app="juiceshop"} 0.0028652
juiceshop_startup_duration_seconds{task="ready",app="juiceshop"} 4.486

# HELP process_cpu_user_seconds_total Total user CPU time spent in seconds.
# TYPE process_cpu_user_seconds_total counter
process_cpu_user_seconds_total{app="juiceshop"} 20.731464

# HELP process_cpu_system_seconds_total Total system CPU time spent in seconds.
# TYPE process_cpu_system_seconds_total counter
process_cpu_system_seconds_total{app="juiceshop"} 7.9831199999999995

# HELP process_cpu_seconds_total Total user and system CPU time spent in seconds.
# TYPE process_cpu_seconds_total counter
process_cpu_seconds_total{app="juiceshop"} 28.714584

# HELP process_start_time_seconds Start time of the process since unix epoch in seconds.
# TYPE process_start_time_seconds gauge
process_start_time_seconds{app="juiceshop"} 1635612095

# HELP process_resident_memory_bytes Resident memory size in bytes.
# TYPE process_resident_memory_bytes gauge
process_resident_memory_bytes{app="juiceshop"} 193036288

# HELP process_virtual_memory_bytes Virtual memory size in bytes.
# TYPE process_virtual_memory_bytes gauge
process_virtual_memory_bytes{app="juiceshop"} 418910208

# HELP process_heap_bytes Process heap size in bytes.
# TYPE process_heap_bytes gauge
process_heap_bytes{app="juiceshop"} 202305536

# HELP process_open_fds Number of open file descriptors.
# TYPE process_open_fds gauge
process_open_fds{app="juiceshop"} 24

# HELP process_max_fds Maximum number of open file descriptors.
# TYPE process_max_fds gauge
process_max_fds{app="juiceshop"} 1048576

# HELP nodejs_eventloop_lag_seconds Lag of event loop in seconds.
# TYPE nodejs_eventloop_lag_seconds gauge
nodejs_eventloop_lag_seconds{app="juiceshop"} 0.0400822

# HELP nodejs_eventloop_lag_min_seconds The minimum recorded event loop delay.
# TYPE nodejs_eventloop_lag_min_seconds gauge
nodejs_eventloop_lag_min_seconds{app="juiceshop"} 0.001575936

# HELP nodejs_eventloop_lag_max_seconds The maximum recorded event loop delay.
# TYPE nodejs_eventloop_lag_max_seconds gauge
nodejs_eventloop_lag_max_seconds{app="juiceshop"} 0.082444287

# HELP nodejs_eventloop_lag_mean_seconds The mean of the recorded event loop delays.
# TYPE nodejs_eventloop_lag_mean_seconds gauge
nodejs_eventloop_lag_mean_seconds{app="juiceshop"} 0.010150161133025077

# HELP nodejs_eventloop_lag_stddev_seconds The standard deviation of the recorded event loop delays.
# TYPE nodejs_eventloop_lag_stddev_seconds gauge
nodejs_eventloop_lag_stddev_seconds{app="juiceshop"} 0.00035725425394134326

# HELP nodejs_eventloop_lag_p50_seconds The 50th percentile of the recorded event loop delays.
# TYPE nodejs_eventloop_lag_p50_seconds gauge
nodejs_eventloop_lag_p50_seconds{app="juiceshop"} 0.010149887

# HELP nodejs_eventloop_lag_p90_seconds The 90th percentile of the recorded event loop delays.
# TYPE nodejs_eventloop_lag_p90_seconds gauge
nodejs_eventloop_lag_p90_seconds{app="juiceshop"} 0.010223615

# HELP nodejs_eventloop_lag_p99_seconds The 99th percentile of the recorded event loop delays.
# TYPE nodejs_eventloop_lag_p99_seconds gauge
nodejs_eventloop_lag_p99_seconds{app="juiceshop"} 0.010321919

# HELP nodejs_active_handles Number of active libuv handles grouped by handle type. Every handle type is C++ class name.
# TYPE nodejs_active_handles gauge
nodejs_active_handles{type="Socket",app="juiceshop"} 4
nodejs_active_handles{type="FSWatcher",app="juiceshop"} 1
nodejs_active_handles{type="Server",app="juiceshop"} 1

# HELP nodejs_active_handles_total Total number of active handles.
# TYPE nodejs_active_handles_total gauge
nodejs_active_handles_total{app="juiceshop"} 6

# HELP nodejs_active_requests Number of active libuv requests grouped by request type. Every request type is C++ class name.
# TYPE nodejs_active_requests gauge

# HELP nodejs_active_requests_total Total number of active requests.
# TYPE nodejs_active_requests_total gauge
nodejs_active_requests_total{app="juiceshop"} 0

# HELP nodejs_heap_size_total_bytes Process heap size from Node.js in bytes.
# TYPE nodejs_heap_size_total_bytes gauge
nodejs_heap_size_total_bytes{app="juiceshop"} 110567424

# HELP nodejs_heap_size_used_bytes Process heap size used from Node.js in bytes.
# TYPE nodejs_heap_size_used_bytes gauge
nodejs_heap_size_used_bytes{app="juiceshop"} 107255024

# HELP nodejs_external_memory_bytes Node.js external memory size in bytes.
# TYPE nodejs_external_memory_bytes gauge
nodejs_external_memory_bytes{app="juiceshop"} 2366592

# HELP nodejs_heap_space_size_total_bytes Process heap space size total from Node.js in bytes.
# TYPE nodejs_heap_space_size_total_bytes gauge
nodejs_heap_space_size_total_bytes{space="read_only",app="juiceshop"} 262144
nodejs_heap_space_size_total_bytes{space="new",app="juiceshop"} 1048576
nodejs_heap_space_size_total_bytes{space="old",app="juiceshop"} 71446528
nodejs_heap_space_size_total_bytes{space="code",app="juiceshop"} 1740800
nodejs_heap_space_size_total_bytes{space="map",app="juiceshop"} 3674112
nodejs_heap_space_size_total_bytes{space="large_object",app="juiceshop"} 32346112
nodejs_heap_space_size_total_bytes{space="code_large_object",app="juiceshop"} 49152
nodejs_heap_space_size_total_bytes{space="new_large_object",app="juiceshop"} 0

# HELP nodejs_heap_space_size_used_bytes Process heap space size used from Node.js in bytes.
# TYPE nodejs_heap_space_size_used_bytes gauge
nodejs_heap_space_size_used_bytes{space="read_only",app="juiceshop"} 32808
nodejs_heap_space_size_used_bytes{space="new",app="juiceshop"} 113560
nodejs_heap_space_size_used_bytes{space="old",app="juiceshop"} 70626232
nodejs_heap_space_size_used_bytes{space="code",app="juiceshop"} 1452352
nodejs_heap_space_size_used_bytes{space="map",app="juiceshop"} 2907680
nodejs_heap_space_size_used_bytes{space="large_object",app="juiceshop"} 32126936
nodejs_heap_space_size_used_bytes{space="code_large_object",app="juiceshop"} 2784
nodejs_heap_space_size_used_bytes{space="new_large_object",app="juiceshop"} 0

# HELP nodejs_heap_space_size_available_bytes Process heap space size available from Node.js in bytes.
# TYPE nodejs_heap_space_size_available_bytes gauge
nodejs_heap_space_size_available_bytes{space="read_only",app="juiceshop"} 0
nodejs_heap_space_size_available_bytes{space="new",app="juiceshop"} 933896
nodejs_heap_space_size_available_bytes{space="old",app="juiceshop"} 536144
nodejs_heap_space_size_available_bytes{space="code",app="juiceshop"} 199808
nodejs_heap_space_size_available_bytes{space="map",app="juiceshop"} 760504
nodejs_heap_space_size_available_bytes{space="large_object",app="juiceshop"} 0
nodejs_heap_space_size_available_bytes{space="code_large_object",app="juiceshop"} 0
nodejs_heap_space_size_available_bytes{space="new_large_object",app="juiceshop"} 1047456

# HELP nodejs_version_info Node.js version info.
# TYPE nodejs_version_info gauge
nodejs_version_info{version="v12.22.6",major="12",minor="22",patch="6",app="juiceshop"} 1

# HELP nodejs_gc_duration_seconds Garbage collection duration by kind, one of major, minor, incremental or weakcb.
# TYPE nodejs_gc_duration_seconds histogram
nodejs_gc_duration_seconds_bucket{le="0.001",kind="minor",app="juiceshop"} 637
nodejs_gc_duration_seconds_bucket{le="0.01",kind="minor",app="juiceshop"} 743
nodejs_gc_duration_seconds_bucket{le="0.1",kind="minor",app="juiceshop"} 744
nodejs_gc_duration_seconds_bucket{le="1",kind="minor",app="juiceshop"} 744
nodejs_gc_duration_seconds_bucket{le="2",kind="minor",app="juiceshop"} 744
nodejs_gc_duration_seconds_bucket{le="5",kind="minor",app="juiceshop"} 744
nodejs_gc_duration_seconds_bucket{le="+Inf",kind="minor",app="juiceshop"} 744
nodejs_gc_duration_seconds_sum{kind="minor",app="juiceshop"} 0.5666175000000006
nodejs_gc_duration_seconds_count{kind="minor",app="juiceshop"} 744
nodejs_gc_duration_seconds_bucket{le="0.001",kind="incremental",app="juiceshop"} 13
nodejs_gc_duration_seconds_bucket{le="0.01",kind="incremental",app="juiceshop"} 13
nodejs_gc_duration_seconds_bucket{le="0.1",kind="incremental",app="juiceshop"} 13
nodejs_gc_duration_seconds_bucket{le="1",kind="incremental",app="juiceshop"} 13
nodejs_gc_duration_seconds_bucket{le="2",kind="incremental",app="juiceshop"} 13
nodejs_gc_duration_seconds_bucket{le="5",kind="incremental",app="juiceshop"} 13
nodejs_gc_duration_seconds_bucket{le="+Inf",kind="incremental",app="juiceshop"} 13
nodejs_gc_duration_seconds_sum{kind="incremental",app="juiceshop"} 0.0008097
nodejs_gc_duration_seconds_count{kind="incremental",app="juiceshop"} 13
nodejs_gc_duration_seconds_bucket{le="0.001",kind="major",app="juiceshop"} 0
nodejs_gc_duration_seconds_bucket{le="0.01",kind="major",app="juiceshop"} 8
nodejs_gc_duration_seconds_bucket{le="0.1",kind="major",app="juiceshop"} 13
nodejs_gc_duration_seconds_bucket{le="1",kind="major",app="juiceshop"} 13
nodejs_gc_duration_seconds_bucket{le="2",kind="major",app="juiceshop"} 13
nodejs_gc_duration_seconds_bucket{le="5",kind="major",app="juiceshop"} 13
nodejs_gc_duration_seconds_bucket{le="+Inf",kind="major",app="juiceshop"} 13
nodejs_gc_duration_seconds_sum{kind="major",app="juiceshop"} 0.117819
nodejs_gc_duration_seconds_count{kind="major",app="juiceshop"} 13
nodejs_gc_duration_seconds_bucket{le="0.001",kind="weakcb",app="juiceshop"} 9
nodejs_gc_duration_seconds_bucket{le="0.01",kind="weakcb",app="juiceshop"} 9
nodejs_gc_duration_seconds_bucket{le="0.1",kind="weakcb",app="juiceshop"} 9
nodejs_gc_duration_seconds_bucket{le="1",kind="weakcb",app="juiceshop"} 9
nodejs_gc_duration_seconds_bucket{le="2",kind="weakcb",app="juiceshop"} 9
nodejs_gc_duration_seconds_bucket{le="5",kind="weakcb",app="juiceshop"} 9
nodejs_gc_duration_seconds_bucket{le="+Inf",kind="weakcb",app="juiceshop"} 9
nodejs_gc_duration_seconds_sum{kind="weakcb",app="juiceshop"} 0.0026161
nodejs_gc_duration_seconds_count{kind="weakcb",app="juiceshop"} 9

# HELP juiceshop_version_info Release version of OWASP Juice Shop.
# TYPE juiceshop_version_info gauge
juiceshop_version_info{version="12.10.2",major="12",minor="10",patch="2",app="juiceshop"} 1

# HELP juiceshop_challenges_solved Number of solved challenges grouped by difficulty and category.
# TYPE juiceshop_challenges_solved gauge
juiceshop_challenges_solved{difficulty="3",category="XSS",app="juiceshop"} 0
juiceshop_challenges_solved{difficulty="4",category="Sensitive Data Exposure",app="juiceshop"} 0
juiceshop_challenges_solved{difficulty="3",category="Improper Input Validation",app="juiceshop"} 0
juiceshop_challenges_solved{difficulty="2",category="Broken Access Control",app="juiceshop"} 0
juiceshop_challenges_solved{difficulty="6",category="Vulnerable Components",app="juiceshop"} 0
juiceshop_challenges_solved{difficulty="3",category="Broken Authentication",app="juiceshop"} 0
juiceshop_challenges_solved{difficulty="5",category="Security through Obscurity",app="juiceshop"} 0
juiceshop_challenges_solved{difficulty="5",category="Insecure Deserialization",app="juiceshop"} 0
juiceshop_challenges_solved{difficulty="3",category="Broken Anti Automation",app="juiceshop"} 0
juiceshop_challenges_solved{difficulty="5",category="Broken Authentication",app="juiceshop"} 0
juiceshop_challenges_solved{difficulty="4",category="Injection",app="juiceshop"} 0
juiceshop_challenges_solved{difficulty="4",category="XSS",app="juiceshop"} 0
juiceshop_challenges_solved{difficulty="1",category="Sensitive Data Exposure",app="juiceshop"} 0
juiceshop_challenges_solved{difficulty="1",category="XSS",app="juiceshop"} 2
juiceshop_challenges_solved{difficulty="3",category="Injection",app="juiceshop"} 0
juiceshop_challenges_solved{difficulty="2",category="Security Misconfiguration",app="juiceshop"} 0
juiceshop_challenges_solved{difficulty="4",category="Broken Access Control",app="juiceshop"} 0
juiceshop_challenges_solved{difficulty="5",category="Sensitive Data Exposure",app="juiceshop"} 0
juiceshop_challenges_solved{difficulty="1",category="Security Misconfiguration",app="juiceshop"} 0
juiceshop_challenges_solved{difficulty="4",category="Improper Input Validation",app="juiceshop"} 0
juiceshop_challenges_solved{difficulty="5",category="Broken Anti Automation",app="juiceshop"} 0
juiceshop_challenges_solved{difficulty="6",category="Cryptographic Issues",app="juiceshop"} 0
juiceshop_challenges_solved{difficulty="3",category="Broken Access Control",app="juiceshop"} 0
juiceshop_challenges_solved{difficulty="5",category="Vulnerable Components",app="juiceshop"} 0
juiceshop_challenges_solved{difficulty="4",category="Vulnerable Components",app="juiceshop"} 0
juiceshop_challenges_solved{difficulty="2",category="Injection",app="juiceshop"} 0
juiceshop_challenges_solved{difficulty="3",category="Sensitive Data Exposure",app="juiceshop"} 0
juiceshop_challenges_solved{difficulty="4",category="Broken Authentication",app="juiceshop"} 0
juiceshop_challenges_solved{difficulty="2",category="Sensitive Data Exposure",app="juiceshop"} 0
juiceshop_challenges_solved{difficulty="6",category="Security Misconfiguration",app="juiceshop"} 0
juiceshop_challenges_solved{difficulty="6",category="Broken Anti Automation",app="juiceshop"} 0
juiceshop_challenges_solved{difficulty="4",category="Cryptographic Issues",app="juiceshop"} 0
juiceshop_challenges_solved{difficulty="5",category="Injection",app="juiceshop"} 0
juiceshop_challenges_solved{difficulty="1",category="Unvalidated Redirects",app="juiceshop"} 0
juiceshop_challenges_solved{difficulty="2",category="Broken Authentication",app="juiceshop"} 0
juiceshop_challenges_solved{difficulty="1",category="Miscellaneous",app="juiceshop"} 2
juiceshop_challenges_solved{difficulty="3",category="Security through Obscurity",app="juiceshop"} 0
juiceshop_challenges_solved{difficulty="2",category="XSS",app="juiceshop"} 0
juiceshop_challenges_solved{difficulty="1",category="Improper Input Validation",app="juiceshop"} 0
juiceshop_challenges_solved{difficulty="6",category="Broken Access Control",app="juiceshop"} 0
juiceshop_challenges_solved{difficulty="6",category="Injection",app="juiceshop"} 0
juiceshop_challenges_solved{difficulty="2",category="Miscellaneous",app="juiceshop"} 0
juiceshop_challenges_solved{difficulty="4",category="Security through Obscurity",app="juiceshop"} 0
juiceshop_challenges_solved{difficulty="6",category="Insecure Deserialization",app="juiceshop"} 0
juiceshop_challenges_solved{difficulty="6",category="XSS",app="juiceshop"} 0
juiceshop_challenges_solved{difficulty="2",category="Cryptographic Issues",app="juiceshop"} 0
juiceshop_challenges_solved{difficulty="4",category="Unvalidated Redirects",app="juiceshop"} 0
juiceshop_challenges_solved{difficulty="3",category="XXE",app="juiceshop"} 0
juiceshop_challenges_solved{difficulty="5",category="XXE",app="juiceshop"} 0
juiceshop_challenges_solved{difficulty="5",category="Security Misconfiguration",app="juiceshop"} 0

# HELP juiceshop_challenges_total Total number of challenges grouped by difficulty and category.
# TYPE juiceshop_challenges_total gauge
juiceshop_challenges_total{difficulty="3",category="XSS",app="juiceshop"} 2
juiceshop_challenges_total{difficulty="4",category="Sensitive Data Exposure",app="juiceshop"} 7
juiceshop_challenges_total{difficulty="3",category="Improper Input Validation",app="juiceshop"} 5
juiceshop_challenges_total{difficulty="2",category="Broken Access Control",app="juiceshop"} 3
juiceshop_challenges_total{difficulty="6",category="Vulnerable Components",app="juiceshop"} 2
juiceshop_challenges_total{difficulty="3",category="Broken Authentication",app="juiceshop"} 3
juiceshop_challenges_total{difficulty="5",category="Security through Obscurity",app="juiceshop"} 1
juiceshop_challenges_total{difficulty="5",category="Insecure Deserialization",app="juiceshop"} 1
juiceshop_challenges_total{difficulty="3",category="Broken Anti Automation",app="juiceshop"} 1
juiceshop_challenges_total{difficulty="5",category="Broken Authentication",app="juiceshop"} 3
juiceshop_challenges_total{difficulty="4",category="Injection",app="juiceshop"} 5
juiceshop_challenges_total{difficulty="4",category="XSS",app="juiceshop"} 3
juiceshop_challenges_total{difficulty="1",category="Sensitive Data Exposure",app="juiceshop"} 2
juiceshop_challenges_total{difficulty="1",category="XSS",app="juiceshop"} 2
juiceshop_challenges_total{difficulty="3",category="Injection",app="juiceshop"} 3
juiceshop_challenges_total{difficulty="2",category="Security Misconfiguration",app="juiceshop"} 1
juiceshop_challenges_total{difficulty="4",category="Broken Access Control",app="juiceshop"} 1
juiceshop_challenges_total{difficulty="5",category="Sensitive Data Exposure",app="juiceshop"} 3
juiceshop_challenges_total{difficulty="1",category="Security Misconfiguration",app="juiceshop"} 1
juiceshop_challenges_total{difficulty="4",category="Improper Input Validation",app="juiceshop"} 2
juiceshop_challenges_total{difficulty="5",category="Broken Anti Automation",app="juiceshop"} 2
juiceshop_challenges_total{difficulty="6",category="Cryptographic Issues",app="juiceshop"} 3
juiceshop_challenges_total{difficulty="3",category="Broken Access Control",app="juiceshop"} 5
juiceshop_challenges_total{difficulty="5",category="Vulnerable Components",app="juiceshop"} 5
juiceshop_challenges_total{difficulty="4",category="Vulnerable Components",app="juiceshop"} 2
juiceshop_challenges_total{difficulty="2",category="Injection",app="juiceshop"} 1
juiceshop_challenges_total{difficulty="3",category="Sensitive Data Exposure",app="juiceshop"} 1
juiceshop_challenges_total{difficulty="4",category="Broken Authentication",app="juiceshop"} 2
juiceshop_challenges_total{difficulty="2",category="Sensitive Data Exposure",app="juiceshop"} 3
juiceshop_challenges_total{difficulty="6",category="Security Misconfiguration",app="juiceshop"} 1
juiceshop_challenges_total{difficulty="6",category="Broken Anti Automation",app="juiceshop"} 1
juiceshop_challenges_total{difficulty="4",category="Cryptographic Issues",app="juiceshop"} 1
juiceshop_challenges_total{difficulty="5",category="Injection",app="juiceshop"} 1
juiceshop_challenges_total{difficulty="1",category="Unvalidated Redirects",app="juiceshop"} 1
juiceshop_challenges_total{difficulty="2",category="Broken Authentication",app="juiceshop"} 1
juiceshop_challenges_total{difficulty="1",category="Miscellaneous",app="juiceshop"} 3
juiceshop_challenges_total{difficulty="3",category="Security through Obscurity",app="juiceshop"} 1
juiceshop_challenges_total{difficulty="2",category="XSS",app="juiceshop"} 1
juiceshop_challenges_total{difficulty="1",category="Improper Input Validation",app="juiceshop"} 3
juiceshop_challenges_total{difficulty="6",category="Broken Access Control",app="juiceshop"} 1
juiceshop_challenges_total{difficulty="6",category="Injection",app="juiceshop"} 1
juiceshop_challenges_total{difficulty="2",category="Miscellaneous",app="juiceshop"} 1
juiceshop_challenges_total{difficulty="4",category="Security through Obscurity",app="juiceshop"} 1
juiceshop_challenges_total{difficulty="6",category="Insecure Deserialization",app="juiceshop"} 1
juiceshop_challenges_total{difficulty="6",category="XSS",app="juiceshop"} 1
juiceshop_challenges_total{difficulty="2",category="Cryptographic Issues",app="juiceshop"} 1
juiceshop_challenges_total{difficulty="4",category="Unvalidated Redirects",app="juiceshop"} 1
juiceshop_challenges_total{difficulty="3",category="XXE",app="juiceshop"} 1
juiceshop_challenges_total{difficulty="5",category="XXE",app="juiceshop"} 1
juiceshop_challenges_total{difficulty="5",category="Security Misconfiguration",app="juiceshop"} 1

# HELP juiceshop_coding_challenges_progress Number of coding challenges grouped by progression phase.
# TYPE juiceshop_coding_challenges_progress gauge
juiceshop_coding_challenges_progress{phase="find it",app="juiceshop"} 0
juiceshop_coding_challenges_progress{phase="fix it",app="juiceshop"} 0
juiceshop_coding_challenges_progress{phase="unsolved",app="juiceshop"} 26

# HELP juiceshop_cheat_score Overall probability that any hacking or coding challenges were solved by cheating.
# TYPE juiceshop_cheat_score gauge
juiceshop_cheat_score{app="juiceshop"} 0

# HELP juiceshop_coding_challenges_accuracy Overall accuracy while solving coding challenges grouped by phase.
# TYPE juiceshop_coding_challenges_accuracy gauge
juiceshop_coding_challenges_accuracy{phase="find it",app="juiceshop"} Nan
juiceshop_coding_challenges_accuracy{phase="fix it",app="juiceshop"} Nan

# HELP juiceshop_orders_placed_total Number of orders placed in OWASP Juice Shop.
# TYPE juiceshop_orders_placed_total gauge
juiceshop_orders_placed_total{app="juiceshop"} 3

# HELP juiceshop_users_registered Number of registered users grouped by customer type.
# TYPE juiceshop_users_registered gauge
juiceshop_users_registered{type="standard",app="juiceshop"} 10
juiceshop_users_registered{type="deluxe",app="juiceshop"} 3

# HELP juiceshop_users_registered_total Total number of registered users.
# TYPE juiceshop_users_registered_total gauge
juiceshop_users_registered_total{app="juiceshop"} 20

# HELP juiceshop_wallet_balance_total Total balance of all users' digital wallets.
# TYPE juiceshop_wallet_balance_total gauge
juiceshop_wallet_balance_total{app="juiceshop"} 500

# HELP juiceshop_user_social_interactions Number of social interactions with users grouped by type.
# TYPE juiceshop_user_social_interactions gauge
juiceshop_user_social_interactions{type="review",app="juiceshop"} 24
juiceshop_user_social_interactions{type="complaint",app="juiceshop"} 1
juiceshop_user_social_interactions{type="feedback",app="juiceshop"} 7

# HELP http_requests_count Total HTTP request count grouped by status code.
# TYPE http_requests_count counter
http_requests_count{status_code="2XX",app="juiceshop"} 172
http_requests_count{status_code="3XX",app="juiceshop"} 63
